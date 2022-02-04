import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import { Typography } from '@mui/material';

function Later({ updateFormData, ...formData }) {

  return (
    <div className={styles.main}>
        <Head>
        <title>Pranic Family - May you be joyful & free!</title>
        <meta name="robots" content="noindex,nofollow" />
        </Head>

      <section className="bubble active" id="apply-later">
           <p>Oops {formData.name}! Based on your answers, it looks like we might not be the right fit for you. Feel free to reapply at a later time.</p>
           <Typography variant='h4'>May you be joyful, and free!</Typography>
      </section>

      <Link href="/"><a>Back to Homepage</a></Link>
    
    </div>
    

  )
}



export default Later