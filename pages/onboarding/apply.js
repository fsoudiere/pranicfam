import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.scss'
import { useAppContext } from '../../context/UserContext.js'
import { useState } from 'react';
import Link from 'next/link';
import { useCookies } from "react-cookie"

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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
  
  const [referral, setReferral] = useState("");

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
    phone: Yup.string()
      .min(8, 'Phone should start with + and the area code.')
      .required('Phone should start with + and the area code.'),
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
    if (formData.medication == 'yes' || formData.diet == 'Omnivore' || formData.problems == 'yes' || formData.motive == 'Body' ) { location.href = "/onboarding/later"; }
    else {registerUser();addReturningCookie(); location.href = "/onboarding/success";}  
  };

  const [cookie, setCookie] = useCookies(["user"])
  const addReturningCookie = (event) => {
    setCookie("user", formData.idList, {
      path: "/",
      maxAge: 10 * 365 * 24 * 60 * 60, // Expires after 1hr
      sameSite: true,
    });
  };

  const registerUser = async event => {
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
    <Layout>
      <div className={styles.main}>

      <Head>
        <title>Pranic Family - Onboarding</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bubble" id="apply-bubble">


              <Controller
                control={control}
                name="referral"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                <FormControl sx={{ minWidth: 240 }}>
                <InputLabel id="demo-simple-select-label">Who referred you?</InputLabel>
                <Select
                  id="referral"
                  {...register('referral')}
                  label="Who referred you?"
                  onChange={(event) => {
                    setReferral(event.target.value);updateFormData({ referral: event.target.value });
                    }}   
                  value={referral ? referral : formData.referral ? formData.referral : ""}  
                  error={errors.referral ? true : false}            >
                  <MenuItem value={'Fabi'}>Fabi</MenuItem>
                  <MenuItem value={'Kamilla'}>Kamilla</MenuItem>
                  <MenuItem value={'Nathan'}>Nathan</MenuItem>
                </Select>
              </FormControl>
                )}
              />
              <p variant="inherit" color="textSecondary">{errors.referral?.message}</p>              
            <p></p> 
            <TextField 
            id="age" 
            type="text"
            {...register('age')}
            onBlur={(event) => {updateFormData({ age: event.target.value });}}
            label="How old are you?"
            variant="standard"
            error={errors.age ? true : false}
            />            
            <p variant="inherit" color="textSecondary">{errors.age?.message}</p> 

            <FormLabel component="legend">Are you on medications you cant miss?</FormLabel>
            <RadioGroup 
            onChange={(event) => {updateFormData({ medication: event.target.value });}}
            required row aria-label="medication" id="medication" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <p></p> 
            <FormLabel component="legend">Do you have any heart/mental problems?</FormLabel>
            <RadioGroup 
            onChange={(event) => {updateFormData({ problems: event.target.value });}}
            required row aria-label="problems" id="problems" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <p></p>
            <TextField 
            id="sms" 
            type="phone"
            {...register('phone')}
            onBlur={(event) => {updateFormData({ phone: event.target.value });}}
            label="What's your Telegram?"
            variant="standard"
            error={errors.phone ? true : false}
            />
            <p variant="inherit" color="textSecondary">{errors.phone?.message}</p> 
            <TextField 
            id="email" 
            type="email"
            {...register('email')}
            onBlur={(event) => {updateFormData({ email: event.target.value });}}
            label="What's your email?"
            variant="standard"
            error={errors.email ? true : false}
            />
            <p variant="inherit" color="textSecondary">{errors.email?.message}</p> 
            <FormLabel component="legend">By signing your name you agree to the <Link href="/"><a>terms</a></Link> and to receive our newsletter.</FormLabel>
            <TextField 
            id="signed" 
            type="text"
            label="Signature"
            {...register('signed')}
            variant="standard"
            error={errors.signed ? true : false}/>
            <p variant="inherit" color="textSecondary">{errors.signed?.message}</p> 

      <Button variant="outlined" type="submit" form="register" onClick={handleSubmit(onSubmit)}
        >Submit</Button>
      </section>

      <Link href="/onboarding"><a>Back </a></Link>
    
    </div>
    </Layout>
    

  )
}



export default Apply