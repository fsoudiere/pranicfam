import styles from '../../styles/Home.module.css'
import { useAppContext } from '../../context/UserContext.js'
import { useState } from 'react';
import Link from 'next/link';
import { useCookies } from "react-cookie"

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
function Apply({ contentCards, updateFormData, ...formData }) {

  console.log(formData);
  const [cookie, setCookie] = useCookies(["user"])
  const handleSelectedChange = (event) => {
    setCookie("user", selectedMember, {
      path: "/",
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    });
  };

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [medication, setMedication] = useState("");
  const [problems, setProblems] = useState("");
  const [referral, setReferral] = useState("");
  const [age, setAge] = useState("");


  const registerUser = async event => {
    event.preventDefault() // don't redirect the pag        
    const res = await fetch('/api/sendinblue', {
      body: JSON.stringify({
        email: formData.email,
        sms: formData.phone,
        referral: formData.referral,
        fname: formData.name,
        diet: formData.diet,
        motive: formData.motive,
        initiated: formData.initiated,
        dry: formData.dry,
        age: formData.age,

      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST'
    })
    const result = await res.json()
  }

  return (
    <div className={styles.main}>
      <form id="register" method="post" onSubmit={registerUser}></form>

      <section className="bubble" id="apply-bubble">
            <InputLabel variant="standard" htmlFor="referral">
            Who referred you?
            </InputLabel>
            <NativeSelect
              form="register" required
              defaultValue={formData.q}
              onChange={(event) => {setReferral(event.target.value);updateFormData({ referral: event.target.value });}}
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
            onChange={(event) => {setAge(event.target.value);updateFormData({ age: event.target.value });}}
            label="How old are you?"
            variant="standard"
            form="register" 
            required/>
            <p></p> 
            <FormLabel component="legend">Are you on medications you cant miss?</FormLabel>
            <RadioGroup 
            onChange={(event) => {setMedication(event.target.value);updateFormData({ medication: event.target.value });}}
            required row aria-label="medication" id="medication" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <p></p> 
            <FormLabel component="legend">Do you have any heart/mental problems?</FormLabel>
            <RadioGroup 
            onChange={(event) => {setProblems(event.target.value);updateFormData({ problems: event.target.value });}}
            required row aria-label="problems" id="problems" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <p></p>
            <TextField 
            id="sms" 
            type="phone"
            value={phone}
            onChange={(event) => {setPhone(event.target.value);updateFormData({ phone: event.target.value });}}
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
            onChange={(event) => {setEmail(event.target.value);updateFormData({ email: event.target.value });}}
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

      <Button variant="outlined" type="submit" form="register" onClick={() => {
        if (formData.medication == 'yes' || formData.diet == 'Omnivore' || formData.problems == 'yes' || formData.motive == 'Body' ) { window.open("/onboarding/later"); }
        else {window.open("/onboarding/success");}
        }}
        >Submit</Button>
      </section>

      <Link href="/onboarding"><a>Back </a></Link>
    
    </div>
    

  )
}



export default Apply