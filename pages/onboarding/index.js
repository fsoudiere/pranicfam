import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.scss'
import { useAppContext } from '../../context/UserContext.js'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { parseCookies } from "../../lib/cookieHelper"
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
  Radio
  } from '@mui/material';


// posts will be populated at build time by getStaticProps()
function Onboarding({ contentCards, selectedMember, queryMember, updateFormData, ...formData }) {
  const { setUser, setSelectedMember, setQueryMember } = useAppContext();
  console.log(formData);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [diet, setDiet] = useState("");
  const [dry, setDry] = useState("");
  const [initiated, setInitiated] = useState("");
  const [motive, setMotive] = useState("");
  const [referral, setReferral] = useState("");
  const [age, setAge] = useState("");

  const handleInputsChange = (event) => {
    setSelectedMember(selectedMember);
    setQueryMember(queryMember);
    updateFormData({ idList : selectedMember, q : queryMember});
  };

  const [isActive, setActive] = useState(true);
  const toggleClass = () => {this.setActive(!isActive);};

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
    
    <Layout>
      <div className={styles.main}>
      <Head>
        <title>Pranic Family - Onboarding</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            onChange={(event) => {
              setUser(event.target.value); updateFormData({ name: event.target.value });
            }}
            form="register"
            required/>
            <Button variant="outlined" onClick={(event) => {
              handleInputsChange();
            }}>Send</Button>
          </section>

          <section className={!isActive ? 'bubble active': 'bubble'} id="journey-bubble">
          <p>Hey {formData.name}, {contentCards[1].desc}</p>
          <p>Swipe</p>

          </section>

          <section className="bubble" id="diet-bubble">
            <p>{contentCards[2].desc}</p>
            <InputLabel variant="standard" htmlFor="diet">
            {contentCards[2].name}
            </InputLabel>
            <NativeSelect
              form="register" required
              onChange={(event) => {setDiet(event.target.value);updateFormData({ diet: event.target.value });}}
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
            <RadioGroup form="register" value={dry} onChange={(event) => {
              setDry(event.target.value);updateFormData({ dry: event.target.value });}} required row aria-label="dry" id="dry" name="row-radio-buttons-group">
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
          <RadioGroup form="register" value={initiated} onChange={(event) => {
            setInitiated(event.target.value);updateFormData({ initiated: event.target.value });
            }} required row aria-label="initiated" id="initiated" name="row-radio-buttons-group">
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
              onChange={(event) => {setMotive(event.target.value);updateFormData({ motive: event.target.value });
            }}
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
           
            
          <Link href="/onboarding/apply"><a>Next </a></Link>
          <Link href="/onboarding/later"><a>Later </a></Link>
          
    
    </div>
    </Layout>
    

  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps({query, req}) {
  const data = parseCookies(req);
  
  const member = query.a || 'undefined';
  let queryMember = member;
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://trello.com/b/aOOx3O4Q.json')
  const posts = await res.json()

  const fabi = "61ba2e77d9741d7fc9a75e4d"
  const nathan = "61bbae0eaf9f8c2284e2a4dd"
  const hrefna = "61bbae1a66752b3ad447ec8c"
  const kamilla = "61bbae23f477ee272f05a5c4"
  const rakhi = "61bc8fd878662a71f9458203"
  const ray = "61c25cc82a7abf39186de6d6"
  
  const members = [fabi, nathan, hrefna, kamilla, rakhi, ray];
  const random = Math.floor(Math.random() * members.length);
  let selectedMember;

  let contentCards = posts.cards.filter(card => {

      if (member == 'Fabi') {
        selectedMember = fabi;
        return card.idList == fabi && !card.closed; 
      } else
      if (member == 'Nathan') {
         selectedMember = nathan;
        return card.idList == nathan && !card.closed;
      } else
      if (member == 'Hrefna') {
         selectedMember = hrefna;
        return card.idList == hrefna && !card.closed;
      } else
      if (member == 'Kamilla') {
         selectedMember = kamilla;
        return card.idList == kamilla && !card.closed;
      } else
      if (member == 'Rakhi') {
         selectedMember = rakhi;
        return card.idList == rakhi && !card.closed;
      } else
      if (member == 'Ray') {
         selectedMember = ray;
        return card.idList == ray && !card.closed;
      } else {
       selectedMember = members[random];
      return card.idList == selectedMember && !card.closed;
    }
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: data && data,
      contentCards, selectedMember, queryMember
    },
  }
}


export default Onboarding