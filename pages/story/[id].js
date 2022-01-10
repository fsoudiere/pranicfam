import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import Toggle from '../../components/ImageCrossover'
import { useState } from 'react';
import Layout from '../../components/layout'
import { ActionMenu, ActionNext, ActionJoin, ActionNotif } from '../../components/actionbar'
import styles from '../../styles/Home.module.scss'
import ReactDOM from 'react-dom';
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

import { 
  Typography,
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
    anchorOrigin: {
      vertical: "top", 
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
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
            <div className='img-wrapper'>
            <Image
            src={contentCards[0].attachments[1].url ? contentCards[0].attachments[1].url : contentCards[0].attachments[0].url} // Route of the image file
            width="620"
            height="620"
            alt="Fam"
            priority
            className="clipped"
            /></div>
            <div className='img-wrapper'>
            </div>
          </section>
            
          <section className={`bubble push-down ${addBubble === 'hi' ? 'active' : ''}`} id="hi-bubble">
              <Typography variant="h4">Hi</Typography>
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
              <div className={` ${ 
                isHidden.includes('init') ? 'hidden' :
                formData.hide === 'seen' ? 'hidden' : ''}`}>
                <ActionNext onClick={(event) => {
                    if (name.length > 0) {
                  updateFormData({ name: name });
                  setAddBubble('prana');
                  scrollTo('prana');setIsHidden(['init']);
                  } else {  }
                }}/>
              </div>
          </section>

          <section className={`bubble push-down ${addBubble === 'diet' ? 'active' : formData.name  ? 'active' : ''}`}>
          <Typography variant="h4">Hi {formData.name}</Typography>
            <div id="prana" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <div className={` ${ 
              isHidden.includes('prana') ? 'hidden' :
              formData.hide === 'seen' ? 'hidden' : ''}`}>
            <ActionNotif onClick={(event) => { 
                setAddBubble('diet');
                scrollTo('diet');setIsHidden(['init', 'prana']);
              }}/>
              </div>
          </section>


          <section className={`bubble ${addBubble === 'diet' ? 'active' : formData.diet ? 'active' : ''}`}>
          <Image
            src={contentCards[2].attachments[0].url} // Route of the image file
            width="620"
            height="620"
            alt="Fam"
            priority
            className="clipped-triangle"
            />
            <p>{contentCards[2].desc}</p>
            <FormControl fullWidth>
              <InputLabel id="diet">{contentCards[2].name}</InputLabel>
              <Select
                onChange={(event) => {setDiet(event.target.value);updateFormData({ diet: event.target.value });}}
                value={diet ? diet : formData.diet ? formData.diet  : ""}
                label={contentCards[2].name}
                MenuProps={MenuProps}
              >
              <MenuItem value={'Omnivore'}>Omnivore/Pescatarian</MenuItem>
              <MenuItem value={'Vegan'}>Vegan/Vegetarian</MenuItem>
              <MenuItem value={'Raw'}>Raw Food</MenuItem>
              <MenuItem value={'Fruitarian'}>Fruitarian</MenuItem>
              <MenuItem value={'Liquids'}>Liquids Only</MenuItem>
              </Select>
            </FormControl>
            <div className={` ${ 
              isHidden.includes('diet') ? 'hidden' :
              formData.hide === 'seen' ? 'hidden' : ''}`}>
            <ActionNext onClick={(event) => { 
              if (diet.length > 0) {
                setAddBubble('dry');
                scrollTo('dry');setIsHidden(['init', 'prana', 'diet']);
                } else {  }
              }}/>
              </div>
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
          <Image
            src={contentCards[4].attachments[0].url} // Route of the image file
            width="620"
            height="620"
            alt="Fam"
            priority
            className="clipped"
            />
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
          <p><Button onClick={(event) => { 
            window.open('https://bit.ly/3hir5Nz');
            setDryGuide(dryguide);updateFormData({ dryguide: 'clicked' });
            setAddBubble('motive');scrollTo('motive');}} variant="contained">Download</Button></p>
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
                MenuProps={MenuProps}
              >
              <MenuItem value={'Spiritual Growth'}>Spiritual Growth</MenuItem>
              <MenuItem value={'Inner Joy'}>Inner Joy & Freedom</MenuItem>
              <MenuItem value={'Body'}>Health & Body</MenuItem>
              </Select>
            </FormControl>
            <div className={` ${ 
              isHidden.includes('motive') ? 'hidden' :
              formData.hide === 'seen' ? 'hidden' : ''}`}>
            <ActionNotif onClick={(event) => { 
              if (motive.length > 0) {
                setAddBubble('practice');
                scrollTo('practice');setIsHidden(['init', 'prana', 'diet', 'motive']);
                } else {  }
              }}/>
              </div>   
          </section>

          <section className={`bubble ${addBubble === 'practice' ? 'active' : practiceName.length > 0 ? 'active' : ''}`} id="practice-bubble">
          <Image
            src={contentCards[6].attachments[0].url} // Route of the image file
            width="620"
            height="620"
            alt="Fam"
            priority
            className="clipped-triangle"
            />
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
            <div className={` ${ 
              isHidden.includes('practice') ? 'hidden' :
              formData.hide === 'seen' ? 'hidden' : ''}`}>
              <ActionNext onClick={(event) => { 
                if (practiceName.length > 0) {
                  setAddBubble('focus');
                  scrollTo('focus');setIsHidden(['init', 'prana', 'diet', 'motive', 'practice']);
                  } else {  }
                }}/>
              </div>
          </section>
      
          <section className={`bubble ${addBubble === 'focus' ? 'active' : formData.pricing ? 'active': ''}`} >
          <Typography variant="h6" id="focus">Ready for more meaningful discussion & projects, {contentCards[7].name}</Typography>
          <p>{contentCards[7].desc}</p>
          <FormControl fullWidth>
              <InputLabel id="pricing">Which plan suits you to join us?</InputLabel>
              <Select
                onChange={(event) => {
                    setPricing(event.target.value);updateFormData({ pricing: event.target.value });}}
                value={pricing ? pricing : formData.pricing ? formData.pricing : ""}
                label="which plan suits you to join us?"
                MenuProps={MenuProps}
              >
              <MenuItem value={'twenty'}>$20/mo Access to all channels</MenuItem>
              <MenuItem value={'ten'}>$10/mo Dry Fasting Channel</MenuItem>
              <MenuItem value={'free'}>7 Day Free Trial for Now!</MenuItem>
              </Select>
            </FormControl>
            <div className={` ${ 
              isHidden.includes('focus') ? 'hidden' : 
              formData.hide === 'seen' ? 'hidden' : ''}`}>
              <ActionNotif onClick={(event) => { 
                if (pricing.length > 0) {
              setAddBubble('connect'); scrollTo('connect');
              updateFormData({ hide: 'seen' });
            } else {  }
              }} /></div>
          </section>

          <section className={`bubble ${addBubble === 'connect' ? 'active' : formData.hide ? 'active' : ''}`} id="connect">
          <Image
            src={contentCards[8].attachments[0].url} // Route of the image file
            width="620"
            height="620"
            alt="Fam"
            priority
            className="clipped"
            />
          <Typography variant="h6">{contentCards[8].name}</Typography>
          <p>{contentCards[8].desc}</p>

              
          <ActionJoin href='/apply'/>
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
        { params: { id: "tobias" } },
        { params: { id: "luiza" } },
        { params: { id: "hrefna" } },
        { params: { id: "nathan" } },
        { params: { id: "ray" } },
        { params: { id: "monika" } },
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
        if (params.id === 'tobias') {
            pid = '61bc8fd878662a71f9458203';
            return card.idList == pid && !card.closed; 
        } else
        if (params.id === 'luiza') {
            pid = '61cbc5b65bfc5327ae25c62c';
            return card.idList == pid && !card.closed; 
        } else
        if (params.id === 'hrefna') {
            pid = '61bbae1a66752b3ad447ec8c';
            return card.idList == pid && !card.closed; 
        } else
        if (params.id === 'nathan') {
            pid = '61bbae0eaf9f8c2284e2a4dd';
            return card.idList == pid && !card.closed; 
        } else
        if (params.id === 'ray') {
            pid = '61c25cc82a7abf39186de6d6';
            return card.idList == pid && !card.closed; 
        } else
        if (params.id === 'monika') {
            pid = '61db1ef1e1fe3b22a7c6db44';
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