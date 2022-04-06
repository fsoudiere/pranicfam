import Head from 'next/head'
import 'react-phone-number-input/style.css'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.scss'
import { useState } from 'react';
import Link from 'next/link';
import { useCookies } from "react-cookie"
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PhoneInput from 'react-phone-number-input'
import * as Yup from 'yup';

import { parsePhoneNumber } from 'react-phone-number-input'


import { 
  Button, 
  TextField, 
  InputLabel, 
  Select,
  MenuItem,
  FormLabel, 
  FormControl, 
  FormControlLabel, 
  RadioGroup, 
  Radio,
  Typography, 
  } from '@mui/material';


// posts will be populated at build time by getStaticProps()
function Apply({ updateFormData, ...formData }) {  
  const [referral, setReferral] = useState("");
  const [age, setAge] = useState("");
  const [medication, setMedication] = useState("");
  const [problems, setProblems] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();
  console.log(formData);


  const validationSchema = Yup.object().shape({
    age: Yup.number()
      .required('Age is required.')
      .min(21, 'We can only accept 21 and older at the moment.'),
    signed: Yup.string()
    .required('Signature is required.'),
    referral: Yup.string()
    .required('Referral is required.'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    phone: Yup.number()
      .min(8, 'Phone should have at least 8 numbers.')
      .required('Phone is required.'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
const onSubmit = data => {
    if (formData.medication == 'yes' || formData.diet == 'Omnivore' || formData.problems == 'yes' || formData.motive == 'Body' ) { registerUser();location.href = "/apply/later"; }
    else {listUser();registerUser();addReturningCookie(); location.href = "/apply/success";}  
  };

  const [cookie, setCookie] = useCookies(["user"])
  const addReturningCookie = (event) => {
    setCookie("user", formData.idList, {
      path: "/",
      maxAge: 10 * 365 * 24 * 60 * 60, // Expires after 1hr
      sameSite: true,
    });
  };

  const dataUser = {
    email: formData.email,
    sms: formData.phone,
    referral: formData.referral,
    fname: formData.name,
    diet: formData.diet,
    motive: formData.motive,
    initiated: formData.initiated,
    dry: formData.dry,
    age: formData.age,
    area: formData.country,

  }
  
  const registerUser = async event => {
    const res = await fetch('/api/sendinblue', {
      body: JSON.stringify(dataUser),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST'
    })
    const result = await res.json()
  }

const listUser = async event => {
    const res = await fetch("/api/sheet", {
      body: JSON.stringify(dataUser),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST'
    })
  }


  return (
    <Layout>
      <div className={styles.main}>

      <Head>
        <title>Pranic Family - Last Step</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <section className={`bubble active`} id="apply-bubble">

      <Typography variant="h4">Few more details...</Typography>
      <p></p>
  
                <TextField 
                  id="referral" 
                  type="text"
                  value={ referral ? referral : formData.referral ? formData.referral : ""}
                  {...register('referral')}
                  onChange={(event) => {setReferral(event.target.value);updateFormData({ referral: event.target.value });}}
                  label="Who referred you?"
                  variant="standard"
                  error={errors.referral ? true : false}
                  /> 
              
              
              <p variant="inherit" color="textSecondary">{errors.referral?.message}</p>              
            <p></p> 
            <TextField 
            id="age" 
            type="text"
            
            value={ age ? age : formData.age ? formData.age : ""}
            {...register('age')}
            onChange={(event) => {setAge(event.target.value);updateFormData({ age: event.target.value });}}
            label="How old are you?"
            variant="standard"
            error={errors.age ? true : false}
            />            
            <p variant="inherit" color="textSecondary">{errors.age?.message}</p> 

            <FormLabel component="legend">Are you on medications you cant miss?</FormLabel>
            <RadioGroup 
            value={medication ? medication : formData.medication ? formData.medication : ""}
            onChange={(event) => {setMedication(event.target.value);updateFormData({ medication: event.target.value });}}
            required row aria-label="medication" id="medication" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <p></p> 
            <FormLabel component="legend">Do you have any heart/mental problems?</FormLabel>
            <RadioGroup 
            value={problems ? problems : formData.problems ? formData.problems : ""}
            onChange={(event) => {setProblems(event.target.value);updateFormData({ problems: event.target.value });}}
            required row aria-label="problems" id="problems" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <p></p>



            
            <PhoneInput
            id="sms"
            type="phone"
            {...register('phone')}
            defaultCountry='US'
            placeholder="What's your telegram number?"
            value={phone ? phone : formData.phone ? formData.phone : ""}
            onChange={setPhone}
            error={errors.phone ? true : false}
            />
            <p variant="inherit" color="textSecondary">{errors.phone?.message}</p> 
            
            
            <TextField 
            id="email" 
            fullWidth
            type="email"
            {...register('email')}
            onChange={(event) => {
              setEmail(event.target.value);
              updateFormData({ email: event.target.value, country: country });}}
            onClick={(event) => {
                setCountry(parsePhoneNumber(phone).country);updateFormData({ phone: phone });}}
            value={email ? email : formData.email ? formData.email : ""}
            label="What's your email?"
            variant="standard"
            error={errors.email ? true : false}
            />
            <p variant="inherit" color="textSecondary">{errors.email?.message}</p> 
            
            <FormLabel component="legend">By signing your name you agree to the <Link href="https://docs.google.com/document/d/18RvseS_7tTNCmfKpO1Q30sDjTvTDyxrmxpPJETWTLIg"><a style={{textDecoration:'underline'}}>terms</a></Link> and to receive our newsletter.</FormLabel>
            <TextField 
            id="signed" 
            type="text"
            label="Signature"
            {...register('signed')}
            variant="standard"
            error={errors.signed ? true : false}/>
            <p variant="inherit" color="textSecondary">{errors.signed?.message}</p> 

      <Button variant="contained" type="submit" form="register" onClick={handleSubmit(onSubmit)}
        >Submit</Button>
      </section>
    
    </div>
    </Layout>
    

  )
}



export default Apply