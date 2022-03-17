import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import Toggle from '../../components/ImageCrossover'
import { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import TextColor from '../../components/textColor';
import { ActionNext, ActionJoin, ActionScroll } from '../../components/actionbar'
import styles from '../../styles/Story.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { 
  Typography,
  Button, 
  TextField, 
  InputLabel, 
  Select,
  MenuItem,
  FormLabel, 
  Checkbox, 
  FormGroup,
  FormControl, 
  FormControlLabel, 
  RadioGroup, 
  Radio,
  Stack
  } from '@mui/material';

function Story({ contentCards, params, updateFormData, ...formData }) {

  const [name, setName] = useState("");
  const [diet, setDiet] = useState("");
  const [dry, setDry] = useState("");
  const [initiated, setInitiated] = useState("");
  const [motive, setMotive] = useState("");
  const [teacher, setTeacher] = useState("");
  const [pricing, setPricing] = useState("");
  const [dryguide, setDryGuide] = useState("");
  const [isHidden, setIsHidden] = useState('');
  const [addBubble, setAddBubble] = useState('hi');

  const MenuProps = {
    anchorOrigin: {
      vertical: "top", 
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
  };

  const [practiceName, setPracticeName] = useState({
    yoga: false,
    breathwork: false,
    meditation: false,
    chanting: false,
    qigong: false,
    reading: false,
    walks: false,
    writing: false,
    dance: false,
    art: false,
    cleansing: false,
    tantra: false,
  });
  const handleChange = (event) => {
    setPracticeName({
      ...practiceName,
      [event.target.name]: event.target.checked,
    });
  };
  const { yoga, breathwork, meditation, chanting, qigong, reading, walks, writing, dance, art, cleansing, tantra } = practiceName;

  function scrollTo(hash) {
      location.hash = "#" + hash;
  }

  function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  return (
    
    <Layout>
      <div className={styles.main + ` ${params.id ? params.id : ''}`}>
      <Head>
        <title>Pranic Family - {capitalizeFirst(params.id)}&apos;s Journey</title>
        <meta property="og:url" content={'https://pranicfamily.com/story/' + `${params.id ? params.id : ''}`} key="ogurl" />
        <meta property="og:image" content={'https://pranicfamily.com/images/' + `${params.id ? params.id : 'joy'}` + '.jpg'} key="ogimage" />
        <meta property="og:title" content={'Join the Pranic Family with' + ` ${params.id ? capitalizeFirst(params.id) : 'Grace'}`} key="ogtitle" />
      </Head>

          <section className={`bubble pushup ${addBubble === 'hi' ? 'active' : formData.name ? 'active' : ''}`} id="hi-img">
            <div className='img-wrapper'>
            <Image
            src={contentCards[0].attachments[1].url} // Route of the image file
            width="620"
            height="620"
            priority
            className="clipped"
            /></div>

          </section>
            
          <section className={`hi bubble ${addBubble === 'hi' ? 'active' : ''}`} id="hi-bubble">
              <Typography variant="h4">Hi Dear!</Typography>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[0].desc}</ReactMarkdown>
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
                  setIsHidden(['init']);
                  } else {  }
                }}/>
              </div>
          </section>

          <section className={`hi bubble push25 ${addBubble === 'diet' ? 'active' : formData.name  ? 'active' : ''}`}>
          <Typography variant="h4">Hi {formData.name}</Typography>
          <ReactMarkdown id="prana" remarkPlugins={[remarkGfm]}>{contentCards[1].desc}</ReactMarkdown>
            <div className={` ${ 
              isHidden.includes('prana') ? 'hidden' :
              formData.hide === 'seen' ? 'hidden' : ''}`}>
            <ActionScroll onClick={(event) => { 
                setAddBubble('diet');
                scrollTo('diet');setIsHidden(['init', 'prana']);
              }}/> 
              </div>
          </section>


          <section className={`bubble toleft push30 ${addBubble === 'diet' ? 'active' : formData.diet ? 'active' : ''}`}>
          <div className='img-wrapper'>
            <Image
            src={contentCards[2].attachments[0].url} // Route of the image file
            width="620"
            height="620"
            priority
            id="diet"
            className="clipped-triangle"
            /></div>
            <div className='img-wrapper'>
            </div>
          </section>
          
          <section className={`bubble left push15 ${addBubble === 'diet' ? 'active' : formData.diet ? 'active' : ''}`}>
            <TextColor className='bubble-introL' text='Oh, that diet!' />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[2].desc}</ReactMarkdown>
            <FormControl fullWidth className='pushdown'>
              <InputLabel >{contentCards[2].name}</InputLabel>
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

          <section className={`bubble push30 ${addBubble === 'dry' ? 'active' : formData.dry ? 'active' : ''}`} id="dry-bubble">
            <div id="dry"></div><ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[3].desc}</ReactMarkdown>
            <FormLabel component="legend">{contentCards[3].name}</FormLabel>
            <RadioGroup form="register" value={dry ? dry : formData.dry ? formData.dry : ""} onChange={(event) => {
              setAddBubble('initiated');scrollTo('initiated');setDry(event.target.value);updateFormData({ dry: event.target.value });}} 
              required row aria-label="dry" id="dry" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio  />} label="No" />
            </RadioGroup>
          </section>
  
          <div id="initiated"></div>
          <section className={`bubble toright push30 ${addBubble === 'initiated' ? 'active' : formData.initiated ? 'active' : ''}`} id="initiated-bubble">
          <div className='img-wrapper'>
            <Image
            src={contentCards[4].attachments[0].url} // Route of the image file
            width="620"
            height="620"
            priority
            className="clipped-downtriangle"
            /></div>
            <div className='img-wrapper'>
            </div>
          </section>
          <section className={`bubble push10 right ${addBubble === 'initiated' ? 'active' : formData.initiated ? 'active' : ''}`} id="initiated-bubble">
          <TextColor className='bubble-introR' text='Realizations... Realizations...' />
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[4].desc}</ReactMarkdown>
            <FormLabel component="legend">{contentCards[4].name}</FormLabel>
            <RadioGroup form="register" value={initiated ? initiated : formData.initiated ? formData.initiated : ""} onChange={(event) => {
              setInitiated(event.target.value);updateFormData({ initiated: event.target.value });
              }} 
              required row aria-label="initiated" id="initiated" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" onClick={(event) => { setAddBubble('motive');scrollTo('motive'); }}/>
              <FormControlLabel value="no" control={<Radio  />} label="No" onClick={(event) => { setAddBubble('dryguide');scrollTo('dryguide'); }}/>
            </RadioGroup>
          </section>

          <section className={`bubble push10 ${addBubble === 'dryguide' ? 'active' : formData.dryguide ? 'active' : ''}`}>
          <div id="dryguide"></div><p>First time you hear this? Well Here&apos;s our pranic initiation guide!</p>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button className="guidetag" onClick={(event) => { 
            window.open('https://bit.ly/3hir5Nz');
            setDryGuide(dryguide);updateFormData({ dryguide: 'clicked' });
            setAddBubble('motive');scrollTo('motive');}} variant="contained">Download</Button>
            <Button onClick={(event) => { 
            setAddBubble('motive');scrollTo('motive');}} variant="outlined">Next</Button>
            </Stack>
          </section>



          <section className={`bubble push30 ${addBubble === 'motive' ? 'active' : formData.motive ? 'active' : ''}`}>
          <div id="motive"></div><ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[5].desc}</ReactMarkdown>
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
            <ActionScroll onClick={(event) => { 
              if (motive.length > 0) {
                setAddBubble('practice');
                scrollTo('practice');setIsHidden(['init', 'prana', 'diet', 'motive']);
                } else {  }
              }}/>
              </div>   
          </section>

          <section className={`bubble toleft push30 ${addBubble === 'practice' ? 'active' : formData.practice ? 'active': ''}`} id="practice-bubble">
          <div id="practice"></div><div className='img-wrapper'>
            <Image
            src={contentCards[6].attachments[0].url} // Route of the image file
            width="620"
            height="620"
            priority
            className="clipped-triangle"
            /></div>
            <div className='img-wrapper'>
            </div>
          </section>

          <section className={`bubble push10 left ${addBubble === 'practice' ? 'active' : formData.practice ? 'active': ''}`} id="practice-bubble">
          <TextColor className='bubble-introL' text='Daily Joy' />
          <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[6].desc}</ReactMarkdown>
              <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">{contentCards[6].name}</FormLabel>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={yoga} onChange={handleChange} name="yoga" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Yoga"/>
                  <FormControlLabel control={<Checkbox checked={breathwork} onChange={handleChange} name="breathwork" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Breathwork"/>
                <FormControlLabel control={<Checkbox checked={meditation} onChange={handleChange} name="meditation" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Meditation" />
                <FormControlLabel control={<Checkbox checked={chanting} onChange={handleChange} name="chanting" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Chanting" />
                <FormControlLabel control={<Checkbox checked={qigong} onChange={handleChange} name="qigong" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="QiGong"/>
                <FormControlLabel control={<Checkbox checked={reading} onChange={handleChange} name="reading" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Reading"/>
                <FormControlLabel control={<Checkbox checked={walks} onChange={handleChange} name="walks" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Walks"/>
                <FormControlLabel control={<Checkbox checked={writing} onChange={handleChange} name="writing" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Writing"/>
                <FormControlLabel control={<Checkbox checked={dance} onChange={handleChange} name="dance" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Dance"/>
                <FormControlLabel control={<Checkbox checked={art} onChange={handleChange} name="art" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Art"/>
                <FormControlLabel control={<Checkbox checked={cleansing} onChange={handleChange} name="cleansing" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Cleansing"/>
                <FormControlLabel control={<Checkbox checked={tantra} onChange={handleChange} name="tantra" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>
                  } label="Tantra"/>
              </FormGroup>
            </FormControl>
          </div>
            <div className={` ${ 
              isHidden.includes('practice') ? 'hidden' :
              formData.hide === 'seen' ? 'hidden' : ''}`}>
              <ActionNext onClick={(event) => { 
                  setAddBubble('focus');
                  updateFormData({ practice: 'checked' });
                  scrollTo('focus');setIsHidden(['init', 'prana', 'diet', 'motive', 'practice']);
                }}/>
              </div>
          </section>
      
          <section className={`bubble push15 ${addBubble === 'focus' ? 'active' : formData.pricing ? 'active': ''}`} >
          <div id="focus"></div><Typography variant="h6">Ready for more meaningful discussion & projects, {contentCards[7].name}</Typography>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[7].desc}</ReactMarkdown>
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
              <ActionScroll onClick={(event) => { 
                if (pricing.length > 0) {
              setAddBubble('connect'); scrollTo('connect');
              updateFormData({ hide: 'seen' });
            } else {  }
              }} /></div>
          </section>

          <section className={`bye bubble push30 ${addBubble === 'connect' ? 'active' : formData.hide ? 'active' : ''}`} id="connect">
          <div id="connect"></div><div className='img-wrapper'>
            <Image
            src={contentCards[8].attachments[0].url} // Route of the image file
            width="620"
            height="620"
            priority
            className="clipped"
            /></div>
            <div className='img-wrapper'>
            </div>
          </section>
          <section className={`hi bubble push10 ${addBubble === 'connect' ? 'active' : formData.hide ? 'active' : ''}`}>

          <Typography variant="h6">{contentCards[8].name}</Typography>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[8].desc}</ReactMarkdown>
          <div className='push15'></div>

              
          <ActionJoin href='/apply'/>
          </section>

    </div>
    </Layout>
    

  )
}


export async function getStaticPaths() {
  
    // fallback: false means pages that don’t have the
    // correct id will 404.
    return { paths: [
        { params: { id: "fabi" } },
        { params: { id: "alice" } },
        { params: { id: "tobias" } },
        { params: { id: "ciara" } },
        { params: { id: "supriya" } },
        { params: { id: "luiza" } },
        { params: { id: "hrefna" } },
        { params: { id: "nathan" } },
        { params: { id: "rai" } },
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
        if (params.id === 'alice') {
          pid = '6230f7962efadc1dcaed587f';
          return card.idList == pid && !card.closed; 
      } else
        if (params.id === 'tobias') {
            pid = '61bc8fd878662a71f9458203';
            return card.idList == pid && !card.closed; 
        } else
        if (params.id === 'ciara') {
          pid = '622cb287809f612f8589c24c';
          return card.idList == pid && !card.closed; 
      } else
      if (params.id === 'supriya') {
        pid = '622cb3703786a1746e8b4a1f';
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
        if (params.id === 'rai') {
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


    return {
      props: {
        contentCards, params
      },
      revalidate: 1,
    }
}


export default Story
