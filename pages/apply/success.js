import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'

import { 
  Button, Typography, 
  } from '@mui/material';

function Success({ ...formData }) {

  return (
    <Layout>
        <div className={styles.main}>
        <Head>
        <title>Pranic Family - You&apos;ve been accepted!</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <section className="bubble active" id="apply-success">
           <Typography variant='h4'>You&apos;ve been accepted!</Typography>
           <p>Welcome to the Family {formData.name}! Here is the link to our private Telegram. Enjoy you free 7 day trial with us! We can&apos;t wait to meet you for dry fasting on Sunday!</p>
      </section>
      <Button href="https://t.me/+kdOqgFiEYVk3MjE0"  variant="contained"> Join Group ❤️</Button>
      <p></p>
      <Link href="/en"><a>Back to Homepage</a></Link>
    
    </div>
    </Layout>
    

  )
}



export default Success
