import styles from '../styles/Home.module.css'
import { useAppContext } from '../context/UserContext.js'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { 
  Button, 
  TextField, 
  InputLabel, 
  NativeSelect , 
  Select,
  OutlinedInput,
  ListItemText,
  MenuItem,
  FormLabel, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  RadioGroup, 
  Radio, 
  } from '@mui/material';


// posts will be populated at build time by getStaticProps()
function Onboarding({ contentCards }) {

  const { user, login } = useAppContext();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [diet, setDiet] = useState("");
  const [dry, setDry] = useState("");
  const [initiated, setInitiated] = useState("");
  const [motive, setMotive] = useState("");
  const [referral, setReferral] = useState("");
  const [age, setAge] = useState("");


  const registerUser = async event => {
    event.preventDefault() // don't redirect the pag        
    const res = await fetch('/api/sendinblue', {
      body: JSON.stringify({
        email: email,
        sms: phone,
        referral: referral,
        fname: name,
        diet: diet,
        motive: motive,
        initiated: initiated,
        dry: dry,
        age: age,

      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST'
    })
    const result = await res.json()
  }

  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    this.setActive(!isActive);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const practices = [
      'Yoga',
      'Meditation',
      'Breathwork',
    ];
    const [practiceName, setPracticeName] = useState([]);
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPracticeName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

  return (
    <div className={styles.main}>
      <form id="register" method="post" onSubmit={registerUser}></form>
          <section className={isActive ? 'bubble active': 'bubble'} id="hi-bubble">
            <Image
            src={contentCards[0].attachments[0].url} // Route of the image file
            width="320"
            height="240"
            alt="Fam"
            priority
            />
            <p>{contentCards[0].desc}</p>
            <TextField id="fname" defaultValue="" label={contentCards[0].name} variant="standard" 
            onChange={(event) => {setName(event.target.value);}}
            form="register" required/>
            <p></p>
            <Button variant="outlined" onClick={() => {
              login(name); setActive(!isActive);
            }}>Next</Button>
            <Button variant="outlined" onClick={toggleClass}>Back</Button>
          </section>

          <section className={!isActive ? 'bubble active': 'bubble'} id="journey-bubble">
          <p>Hey {user.name}, {contentCards[1].desc}</p>
          <Button variant="outlined" onClick={() => {
              setDietActive(!isDietActive);
            }}>Continue</Button>
          <Button variant="outlined" onClick={toggleClass}>Back</Button>
          </section>

          <section className="bubble" id="diet-bubble">
            <p>{contentCards[2].desc}</p>
            <InputLabel variant="standard" htmlFor="diet">
            {contentCards[2].name}
            </InputLabel>
            <NativeSelect
              form="register" required
              onChange={(event) => {setDiet(event.target.value);}}
              value={diet}
              inputProps={{
                name: 'diet',
                id: 'diet',
              }}>
              <option value={'Omnivore'}>Omnivore/Pescatarian</option>
              <option value={'Vegan'}>Vegan/Vegetarian</option>
              <option value={'Raw'}>Raw Food</option>
              <option value={'Fruitarian'}>Fruitarian</option>
              <option value={'Liquids'}>Liquids Only</option>
            </NativeSelect>
          </section>

          <section className="bubble" id="dry-bubble">
            <p>{contentCards[3].desc}</p>
            <FormLabel component="legend">{contentCards[3].name}</FormLabel>
            <RadioGroup form="register" value={dry} onChange={(event) => {setDry(event.target.value);}} required row aria-label="dry" id="dry" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </section>

          <section className="bubble" id="dryguide-bubble">
          <p>If NO, Well Here&apos;s our dry fasting guide!</p>
          </section>
  
          <section className="bubble" id="initiated-bubble">
          <p>{contentCards[4].desc}</p>
          <FormLabel component="legend">{contentCards[4].name}</FormLabel>
          <RadioGroup form="register" value={initiated} onChange={(event) => {setInitiated(event.target.value);}} required row aria-label="initiated" id="initiated" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          </section>

          <section className="bubble" id="teacher-bubble">
          <p>{contentCards[6].desc}</p>
          <FormLabel component="legend">If Yes would you like to teach with us?</FormLabel>
          <RadioGroup form="register" required row aria-label="teacher" id="teacher" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          </section>

          <section className="bubble" id="practice-bubble">
            <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">{contentCards[6].name}</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="practices"
              multiple
              value={practiceName}
              defaultValue=""
              onChange={handleChange}
              input={<OutlinedInput label={contentCards[6].name} />}
              MenuProps={MenuProps}
              renderValue={(selected) => selected.join(', ')}
            >
              {practices.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={practiceName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
            </FormControl>
          </section>

          <section className="bubble" id="motive-bubble">
            <p>{contentCards[5].desc}</p>
            <InputLabel variant="standard" htmlFor="motive">
            {contentCards[5].name}
            </InputLabel>
            <NativeSelect
              form="register" required
              value={motive}
              onChange={(event) => {setMotive(event.target.value);}}
              inputProps={{
                name: 'motive',
                id: 'motive',
              }}>
              <option value={'Spiritual Growth'}>Spiritual Growth</option>
              <option value={'Inner Joy'}>Inner Joy & Freedom</option>
              <option value={'Body'}>Health & Body</option>
            </NativeSelect>    
          </section>
      
          <section className="bubble" id="focus-bubble">
          <p>{contentCards[7].name}</p>
          <p>{contentCards[7].desc}</p>
          </section>

          <section className="bubble" id="connect-bubble">
          <p>{contentCards[8].name}</p>
          <p>{contentCards[8].desc}</p>
          </section>


      <section className="bubble" id="apply-bubble">
            <InputLabel variant="standard" htmlFor="referral">
            Who referred you?
            </InputLabel>
            <NativeSelect
              form="register" required
              value={referral}
              onChange={(event) => {setReferral(event.target.value);}}
              inputProps={{
                name: 'referral',
                id: 'referral',
              }}>
              <option value={'Fabi'}>Fabi</option>
              <option value={'Kamilla'}>Kamilla</option>
              <option value={'Facebook'}>Facebook</option>
            </NativeSelect>  
            <p></p> 
            <TextField 
            id="age" 
            type="age"
            value={age}
            onChange={(event) => {setAge(event.target.value);}}
            label="How old are you?"
            variant="standard"
            form="register" 
            required/>
            <p></p> 
            <FormLabel component="legend">Are you on medications you cant miss?</FormLabel>
            <RadioGroup required row aria-label="medication" id="medication" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <p></p> 
            <FormLabel component="legend">Do you have any heart/mental problems?</FormLabel>
            <RadioGroup required row aria-label="problems" id="problems" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <p></p>
            <TextField 
            id="sms" 
            type="phone"
            value={phone}
            onChange={(event) => {setPhone(event.target.value);}}
            label="What's your Telegram?"
            variant="standard"
            form="register" 
            autoComplete="phone"
            required/>
            <p></p> 
            <TextField 
            id="email" 
            type="email"
            value={email}
            onChange={(event) => {setEmail(event.target.value);}}
            label="What's your email?"
            variant="standard"
            form="register"
            required/>
            <p></p>
            <FormLabel component="legend">By signing your name you agree to the <Link href="/"><a>terms</a></Link> and to receive our newsletter.</FormLabel>
            <TextField 
            id="signed" 
            type="signed"
            label="Signature"
            variant="standard"
            required/>
            <p></p>

      <Button variant="outlined" type="submit" form="register" onClick={() => {preventDefault()}}>Submit</Button>
      </section>
    
    </div>
    

  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps({query}) {
  const member = query.a;
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://trello.com/b/aOOx3O4Q.json')
  const posts = await res.json()

  const fabi = "61ba2e77d9741d7fc9a75e4d"
  const nathan = "61bbae0eaf9f8c2284e2a4dd"
  const hrefna = "61bbae1a66752b3ad447ec8c"
  const luiza = "61bbae23f477ee272f05a5c4"
  const rakhi = "61bc8fd878662a71f9458203"
  const ray = "61c25cc82a7abf39186de6d6"
  

  const members = [
    fabi, nathan, hrefna, luiza, rakhi, ray
    ];
    const memberNames = [
      'fabi', 'nathan', 'hrefna', 'luiza', 'rakhi', 'ray'
      ];
  
  const random = Math.floor(Math.random() * members.length);
  let contentCards = posts.cards.filter(card => {
      if (member === 'Fabi') {
        return card.idList == fabi && !card.closed;
      } else
      if (member === 'Nathan') {
        return card.idList == nathan && !card.closed;
      } else
      if (member === 'Hrefna') {
        return card.idList == hrefna && !card.closed;
      } else
      if (member === 'Luiza') {
        return card.idList == luiza && !card.closed;
      } else
      if (member === 'Rakhi') {
        return card.idList == rakhi && !card.closed;
      } else
      if (member === 'Ray') {
        return card.idList == ray && !card.closed;
      } else
      return card.idList == members[random] && !card.closed;
  });
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      contentCards,
    },
  }
}


export default Onboarding