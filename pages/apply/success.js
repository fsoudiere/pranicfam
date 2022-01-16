import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import { ActionMenu, ActionNext, ActionJoin, ActionScroll } from '../../components/actionbar'
import {ParticlesHearts} from '../../components/particles'

import { 
  Button, Typography, 
  } from '@mui/material';

function Success({ contentCards, updateFormData, ...formData }) {

  console.log(formData);

  return (
    <Layout>
        <div className={styles.main}>
        <Head>
        <title>Pranic Family - Welcome Aboard!</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bubble active" id="apply-success">
           <Typography variant='h4'>You&apos;ve been accepted!</Typography>
           <p>Welcome to the Family {formData.name}! Here is the link to our private Telegram. Enjoy you free 7 day trial with us! We can&apos;t wait to meet you for dry fasting on Sunday!</p>
      </section>
      <Button href="https://t.me/PFInviteBot"  variant="contained"> Join Group ❤️</Button>
      <p></p>
      <Link href="/"><a>Back to Homepage</a></Link>
      <ParticlesHearts />
    
    </div>
    </Layout>
    

  )
}



export default Success
