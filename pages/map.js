import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import { Typography, Button, Grid, Stack } from '@mui/material';



function Map() {

  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Members Map</title>
    </Head>

      <main className={styles.main}>
        <Typography variant='h1'>Map</Typography>
        <div className={styles.dash}></div>
        <p>Here we all are, but there you can meet us in the World</p>
        <iframe src="https://www.google.com/maps/d/embed?mid=1pdZKd_iqtmzbOloGpvkfoOamc7ff8abi&z=4&ehbc=2E312F&ll=15.66772, -96.55451" 
        width="100%" height="480" className='mymap'></iframe>
        </main>
    </div>
    </Layout>
  )
}

export default Map

