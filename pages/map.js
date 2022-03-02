import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import { Typography, Button, Grid, Stack } from '@mui/material';
import React, { useEffect, useRef, ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Loader from '../components/loader';

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Loader />;
    case Status.FAILURE:
      return <p>failed</p>;
    case Status.SUCCESS:
      return <MyMapComponent/>;
  }
};

function MyMapComponent() {

  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  const ref = useRef();
  
  useEffect(() => {
    
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    new google.maps.Marker({
      position: { lat: -30.397, lng: 120.644 },
      map,
      title: "Hello World!",
    });
    new google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map,
      title: "Hello World!",
    });
  });

  return <div style={{ height: '100vh', width: '100%' }} ref={ref} id="map" />;
}

function Map() {
  const apiKeyMap = process.env.NEXT_PUBLIC_GMAP;

  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Members Map</title>
    </Head>

      <main className={styles.main}>
        <Typography variant='h1'>Map</Typography>
        <div className={styles.dash}></div>
        <p>Let us meet</p>

        <Wrapper apiKey={apiKeyMap} render={render} />

        </main>
    </div>
    </Layout>
  )
}

export default Map

