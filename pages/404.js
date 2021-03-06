import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import { Typography, Button, Grid, Stack } from '@mui/material';

function Custom404({contentCards}) {

  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - 404</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main className={styles.main}>
        <Typography variant='h1'>404</Typography>
        <div className={styles.dash}></div>
        <p className={styles.description}>
        Oops this page doesn&apos;t seem to exist...</p>

        <Button variant='contained' href="/"><a>Back to Menu</a></Button>
        </main>
    </div>
    </Layout>
  )
}

export default Custom404

