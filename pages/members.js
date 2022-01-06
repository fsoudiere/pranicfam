import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import Button from '@mui/material/Button';


export default function Members() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Pranic Family Member</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Beings living joyfully free
        </p>
        </main>
    </div>
    </Layout>
  )
}
 

