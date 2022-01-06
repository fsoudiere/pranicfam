// pages/onboarding/[id].js
import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/layout'
import { ActionMenu, ActionNext, ActionPlay, ActionNotif } from '../../components/actionbar'
import styles from '../../styles/Home.module.scss'
import ReactDOM from 'react-dom';
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'




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
  Link
  } from '@mui/material';


// posts will be populated at build time by getStaticProps()
function Story({ contentCards, contentHtml, updateFormData, ...formData }) {

  console.log(formData);
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

    function scrollTo(hash) {
      location.hash = "#" + hash;
    }

    const [isHidden, setIsHidden] = useState('');
    const [addBubble, setAddBubble] = useState('hi');
    console.log(isHidden);


// }

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
            
          <section className={`bubble ${addBubble === 'hi' ? 'active' : ''}`} id="hi-bubble">
              <h2 className={styles.title}>Hi</h2>
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
              <div className={` ${ isHidden.includes('init') ? 'hidden' : ''}`}>
                <ActionNext onClick={(event) => {
                    if (name.length > 0) {
                  updateFormData({ name: name });
                  setAddBubble('prana');
                  scrollTo('prana');setIsHidden(['init']);
                  } else {  }
                }}/>
              </div>
          </section>

          <section className={`bubble ${addBubble === 'diet' ? 'active' : formData.name  ? 'active' : ''}`}>
          <h2 className={styles.title}>Hi {formData.name}</h2>
            <div id="prana" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <div className={` ${ isHidden.includes('prana') ? 'hidden' : ''}`}>
            <ActionNotif onClick={(event) => { 
              setAddBubble('diet'); scrollTo('diet'); setIsHidden(['prana', 'init']);}} /></div>
          </section>


          <section className={`bubble ${addBubble === 'diet' ? 'active' : formData.diet ? 'active' : ''}`}>
            <p>{contentCards[2].desc}</p>
            <FormControl fullWidth>
              <InputLabel id="diet">{contentCards[2].name}</InputLabel>
              <Select
                onChange={(event) => {setDiet(event.target.value);updateFormData({ diet: event.target.value });}}
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
            <div className={` ${ isHidden.includes('diet') ? 'hidden' : ''}`}>
            <ActionNext onClick={(event) => { 
              setAddBubble('dry'); scrollTo('dry');setIsHidden(['prana', 'init', 'diet']);}} /></div>
          </section>

          <section className={`bubble ${addBubble === 'dry' ? 'active' : formData.dry ? 'active' : ''}`}>
            <p id="dry">{contentCards[3].desc}</p>
            <FormLabel component="legend">{contentCards[3].name}</FormLabel>
            <RadioGroup form="register" value={dry ? dry : formData.dry ? formData.dry : ""} onChange={(event) => {
              setAddBubble('initiated');scrollTo('initiated');setDry(event.target.value);updateFormData({ dry: event.target.value });}} 
              required row aria-label="dry" id="dry" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </section>
  
          <section className={`bubble ${addBubble === 'initiated' ? 'active' : formData.initiated ? 'active' : ''}`} id="initiated-bubble">
          <p id="initiated">{contentCards[4].desc}</p>
          <FormLabel component="legend">{contentCards[4].name}</FormLabel>
          <RadioGroup form="register" value={initiated ? initiated : formData.initiated ? formData.initiated : ""} onChange={(event) => {
            setInitiated(event.target.value);updateFormData({ initiated: event.target.value });
            }} 
            required row aria-label="initiated" id="initiated" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" onClick={(event) => { setAddBubble('teacher');scrollTo('teacher'); }}/>
            <FormControlLabel value="no" control={<Radio />} label="No" onClick={(event) => { setAddBubble('dryguide');scrollTo('dryguide'); }}/>
          </RadioGroup>
          </section>

          <section className={`bubble ${addBubble === 'dryguide' ? 'active' : formData.dryguide ? 'active' : ''}`} id="dryguide">
          <p>First time you hear this? Well Here&apos;s our pranic initiation guide!</p>
          <p><Button onClick={(event) => { setDryGuide(dryguide);updateFormData({ dryguide: 'clicked' });setAddBubble('motive');scrollTo('motive');}} variant="outlined">Download</Button></p>
          </section>

          <section className={`bubble ${addBubble === 'teacher' ? 'active' : formData.initiated ==='Yes' ? 'active' : ''}`} id="teacher">
          <FormLabel component="legend">Already done an initiation? Maybe would you like to teach with us?</FormLabel>
          <RadioGroup form="register" value={teacher ? teacher : formData.teacher ? formData.teacher : ""} onChange={(event) => {
            setTeacher(event.target.value);updateFormData({ teacher: event.target.value });
            }} 
            required row aria-label="teacher" id="teacher" name="row-radio-buttons-group">
            <FormControlLabel onChange={(event) => { setAddBubble('motive');scrollTo('motive'); }} value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel onChange={(event) => { setAddBubble('motive');scrollTo('motive'); }} value="no" control={<Radio />} label="No" />
          </RadioGroup>
          </section>

          <section className={`bubble ${addBubble === 'motive' ? 'active' : formData.motive ? 'active' : ''}`} id="motive">
            <p>{contentCards[5].desc}</p>
            <FormControl fullWidth>
              <InputLabel>{contentCards[5].name}</InputLabel>
              <Select
                onChange={(event) => {setMotive(event.target.value);updateFormData({ motive: event.target.value });}}
                value={motive ? motive : formData.motive ? formData.motive  : ""}
                label={contentCards[5].name}
              >
              <MenuItem value={'Spiritual Growth'}>Spiritual Growth</MenuItem>
              <MenuItem value={'Inner Joy'}>Inner Joy & Freedom</MenuItem>
              <MenuItem value={'Body'}>Health & Body</MenuItem>
              </Select>
            </FormControl>
            <div className={` ${ isHidden.includes('motive') ? 'hidden' : ''}`}>
            <ActionNotif onClick={(event) => { 
              setAddBubble('practice'); scrollTo('practice');setIsHidden(['prana', 'diet', 'init', 'motive']);}} /></div>
   
          </section>

          <section className={`bubble ${addBubble === 'practice' ? 'active' : practiceName.length > 0 ? 'active' : ''}`} id="practice-bubble">
          <p id="practice">{contentCards[6].desc}</p>
            <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">{contentCards[6].name}</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="practices"
              multiple
              value={practiceName}
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
            <div className={` ${ isHidden.includes('practice') ? 'hidden' : ''}`}>
              <ActionNext onClick={(event) => { 
              setAddBubble('focus'); scrollTo('focus');setIsHidden(['prana', 'diet', 'init', 'motive', 'practice']);}} /></div>
          </section>
      
          <section className={`bubble ${addBubble === 'focus' ? 'active' : formData.pricing ? 'active': ''}`} >
          <p id="focus">Ready for more meaningful discussion & projects, {contentCards[7].name}</p>
          <p>{contentCards[7].desc}</p>
          <FormControl fullWidth>
              <InputLabel id="pricing">which plan suits you to join us?</InputLabel>
              <Select
                onChange={(event) => {
                    setPricing(event.target.value);updateFormData({ pricing: event.target.value });}}
                value={pricing ? pricing : formData.pricing ? formData.pricing : ""}
                label="which plan suits you to join us?"
              >
              <MenuItem value={'twenty'}>$20/mo Access to all channels</MenuItem>
              <MenuItem value={'ten'}>$10/mo Dry Fasting Channel</MenuItem>
              <MenuItem value={'free'}>7 Day Free Trial for Now!</MenuItem>
              </Select>
            </FormControl>
            <div className={` ${ isHidden.includes('focus') ? 'hidden' : ''}`}>
              <ActionNotif onClick={(event) => { 
              setAddBubble('connect'); scrollTo('connect');setIsHidden(['prana', 'diet', 'init', 'motive', 'practice', 'focus']);}} /></div>
          </section>

          <section className={`bubble ${addBubble === 'connect' ? 'active' : ''}`} id="connect">
          <p>{contentCards[8].name}</p>
          <p>{contentCards[8].desc}</p>
          <ActionNext onClick={(event) => { 
             location.href = '/apply' }} />
          </section>
           
            

          
    
    </div>
    </Layout>
    

  )
}


// In getStaticPaths(), you need to return the list of
// ids of product pages (/products/[id]) that you’d
// like to pre-render at build time. To do so,
// you can fetch all products from a database.
export async function getStaticPaths() {
  
    // fallback: false means pages that don’t have the
    // correct id will 404.
    return { paths: [
        { params: { id: "fabi" } },
        { params: { id: "kamilla" } }
      ], 
      fallback: false }
  }
  
  // params will contain the id for each generated page.
  export async function getStaticProps({ params }) { 
  
    const res = await fetch('https://trello.com/b/aOOx3O4Q.json')
    const posts = await res.json() 

    

    let pid;
    let contentCards = posts.cards.filter(card => {

        if (params.id === 'fabi') {
            pid = '61ba2e77d9741d7fc9a75e4d';
            return card.idList == pid && !card.closed; 
        } else
        if (params.id === 'kamilla') {
            pid = '61bbae23f477ee272f05a5c4';
            return card.idList == pid && !card.closed;
        } 
    });


    const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(contentCards[1].desc)
    const contentHtml = processedContent.toString()

    return {
      props: {
        contentCards, contentHtml
      },
      revalidate: 1,
    }
  }

  export default Story