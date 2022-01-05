import Head from 'next/head'
import Image from 'next/image';
import { useSWR } from 'swr'

import { useState } from 'react';

import Layout from '../../components/layout'
import Actionbar from '../../components/actionbar'
import styles from '../../styles/Home.module.scss'
import ReactDOM from 'react-dom';


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
function Onboarding({ contentCards, contentHtml, selectedMember, queryMember, updateFormData, ...formData }) {

  console.log(formData);
  const [mathMember, setMathMember] = useState("");
  const [name, setName] = useState("");
  const [diet, setDiet] = useState("");
  const [dry, setDry] = useState("");
  const [initiated, setInitiated] = useState("");
  const [motive, setMotive] = useState("");
  const [teacher, setTeacher] = useState("");
  const [pricing, setPricing] = useState("");
  const [dryguide, setDryGuide] = useState("");



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

    const [addBubble, setAddBubble] = useState('hi');

  return (
    
    <Layout>
      <div className={styles.main}>
      <Head>
        <title>Pranic Family - Onboarding</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <section className={`bubble ${addBubble === 'hi' ? 'active' : formData.name ? 'active' : ''}`} id="hi-img">
            <Image
            src={contentCards[0].attachments[0].url} // Route of the image file
            width="620"
            height="620"
            alt="Fam"
            priority
            className="clipped"
            />
          </section>
            
          <section className={`bubble ${addBubble === 'hi' ? 'active' : formData.name  ? 'active' : ''}`} id="hi-bubble">
              <h2 className={styles.title}>Hi {formData.name}</h2>
              <p>{contentCards[0].desc}</p>
              <TextField 
              id="fname" 
              label={contentCards[0].name} 
              variant="standard" 
              value={ name ? name : formData.name ? formData.name : ""}
              onChange={(event) => {
                setName(event.target.value);
              }}
              />
              <Button variant="outlined" type='submit' onClick={(event) => {
                setMathMember(mathMember);
                updateFormData({ name: name, mathMember : selectedMember });
                setAddBubble('prana');
              }}>Send</Button>
          </section>

          <section className={`bubble ${addBubble === 'prana' ? 'active' : formData.name  ? 'active' : ''}`}>
            <p>{contentCards[1].desc}</p>
            <p onClick={(event) => { setAddBubble('diet'); }}>Swipe</p>
          </section>


          <section className={`bubble ${addBubble === 'diet' ? 'active' : formData.diet ? 'active' : ''}`}>
            <p>{contentCards[2].desc}</p>
            <FormControl fullWidth>
              <InputLabel id="diet">{contentCards[2].name}</InputLabel>
              <Select
                onChange={(event) => {setAddBubble('dry');setDiet(event.target.value);updateFormData({ diet: event.target.value });}}
                value={diet ? diet : formData.diet ? formData.diet  : ""}
                label={contentCards[2].name}
              >
              <MenuItem value={'Omnivore'}>Omnivore/Pescatarian</MenuItem>
              <MenuItem value={'Vegan'}>Vegan/Vegetarian</MenuItem>
              <MenuItem value={'Raw'}>Raw Food</MenuItem>
              <MenuItem value={'Fruitarian'}>Fruitarian</MenuItem>
              <MenuItem value={'Liquids'}>Liquids Only</MenuItem>
              </Select>
            </FormControl>
          </section>

          <section className={`bubble ${addBubble === 'dry' ? 'active' : formData.dry ? 'active' : ''}`}>
            <p>{contentCards[3].desc}</p>
            <FormLabel component="legend">{contentCards[3].name}</FormLabel>
            <RadioGroup form="register" value={dry ? dry : formData.dry ? formData.dry : ""} onChange={(event) => {
              setAddBubble('initiated');setDry(event.target.value);updateFormData({ dry: event.target.value });}} 
              required row aria-label="dry" id="dry" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </section>
  
          <section className={`bubble ${addBubble === 'initiated' ? 'active' : formData.initiated ? 'active' : ''}`} id="initiated-bubble">
          <p>{contentCards[4].desc}</p>
          <FormLabel component="legend">{contentCards[4].name}</FormLabel>
          <RadioGroup form="register" value={initiated ? initiated : formData.initiated ? formData.initiated : ""} onChange={(event) => {
            setInitiated(event.target.value);updateFormData({ initiated: event.target.value });
            }} 
            required row aria-label="initiated" id="initiated" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" onClick={(event) => { setAddBubble('teacher'); }}/>
            <FormControlLabel value="no" control={<Radio />} label="No" onClick={(event) => { setAddBubble('dryguide'); }}/>
          </RadioGroup>
          </section>

          <section className={`bubble ${addBubble === 'dryguide' ? 'active' : formData.dryguide ? 'active' : ''}`} id="dryguide-bubble">
          <p>First time you hear this? Well Here&apos;s our pranic initiation guide!</p>
          <p><Button onClick={(event) => { setDryGuide(dryguide);updateFormData({ dryguide: 'clicked' });setAddBubble('motive'); }} variant="outlined">Download</Button></p>
          </section>

          <section className={`bubble ${addBubble === 'teacher' ? 'active' : formData.initiated ==='Yes' ? 'active' : ''}`} id="teacher-bubble">
          <FormLabel component="legend">Already done an initiation? Maybe would you like to teach with us?</FormLabel>
          <RadioGroup form="register" value={teacher ? teacher : formData.teacher ? formData.teacher : ""} onChange={(event) => {
            setTeacher(event.target.value);updateFormData({ teacher: event.target.value });
            }} 
            required row aria-label="teacher" id="teacher" name="row-radio-buttons-group">
            <FormControlLabel onChange={(event) => { setAddBubble('motive'); }} value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel onChange={(event) => { setAddBubble('motive'); }} value="no" control={<Radio />} label="No" />
          </RadioGroup>
          </section>

          <section className={`bubble ${addBubble === 'motive' ? 'active' : formData.motive ? 'active' : ''}`} id="motive-bubble">
            <p>{contentCards[5].desc}</p>
            <FormControl fullWidth>
              <InputLabel id="motive">{contentCards[5].name}</InputLabel>
              <Select
                onChange={(event) => {setAddBubble('practice');setMotive(event.target.value);updateFormData({ motive: event.target.value });}}
                value={motive ? motive : formData.motive ? formData.motive  : ""}
                label={contentCards[5].name}
              >
              <MenuItem value={'Spiritual Growth'}>Spiritual Growth</MenuItem>
              <MenuItem value={'Inner Joy'}>Inner Joy & Freedom</MenuItem>
              <MenuItem value={'Body'}>Health & Body</MenuItem>
              </Select>
            </FormControl>
   
          </section>

          <section className={`bubble ${addBubble === 'practice' ? 'active' : practiceName.length > 0 ? 'active' : ''}`} id="practice-bubble">
          <p>{contentCards[6].desc}</p>
            <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">{contentCards[6].name}</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="practices"
              multiple
              value={practiceName}
              onChange={handleChange}
              onBlur={(event) => {setAddBubble('focus');}}
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
      
          <section className={`bubble ${addBubble === 'focus' ? 'active' : formData.pricing ? 'active': ''}`} id="focus-bubble">
          <p>Ready for more meaningful discussion & projects, {contentCards[7].name}</p>
          <p>{contentCards[7].desc}</p>
          <FormControl fullWidth>
              <InputLabel id="pricing">which plan suits you to join us?</InputLabel>
              <Select
                onChange={(event) => {
                    setAddBubble('connect');setPricing(event.target.value);updateFormData({ pricing: event.target.value });}}
                value={pricing ? pricing : formData.pricing ? formData.pricing : ""}
                label="which plan suits you to join us?"
              >
              <MenuItem value={'twenty'}>$20/mo Access to all channels</MenuItem>
              <MenuItem value={'ten'}>$10/mo Dry Fasting Channel</MenuItem>
              <MenuItem value={'free'}>7 Day Free Trial for Now!</MenuItem>
              </Select>
            </FormControl>
          </section>

          <section className={`bubble ${addBubble === 'connect' ? 'active' : ''}`} id="connect-bubble">
          <p>{contentCards[8].name}</p>
          <p>{contentCards[8].desc}</p>
          </section>
           
            
          <Actionbar href="/onboarding/apply"/>
          
    
    </div>
    </Layout>
    

  )
}



// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps({query}) { 
  
  const member = query.a || 'undefined';
  let queryMember = member;


  //const controller = new AbortController()
  //const timeoutId = setTimeout(function(){controller.abort();}, 1000)   
  //const res = await fetch('https://trello.com/b/aOOx3O4Q.json', { signal: controller.signal })
  const res = await fetch('https://pranicfamily.com/data/aOOx3O4Q.json')
  const posts = await res.json()
  //clearTimeout(timeoutId)


  if (!res) {
    return {
      redirect: {
        destination: '/onboarding/start',
        permanent: false,
      },
    }
  }
  

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
      contentCards, selectedMember, queryMember
    },
  }
}


export default Onboarding