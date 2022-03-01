import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import { Typography, Button, Grid, Stack } from '@mui/material';
import React, { useEffect, useRef, ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function MyMapComponent({
  center,
  zoom,
}) {
  const ref = useRef();
  
  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });

  });

  return <div ref={ref} id="map" />;
}

function Map() {
  const apiKeyMap = process.env.NEXT_PUBLIC_GMAP;


  const center = { lat: 102.5528, lng: 23.6345 };
  const zoom = 4;

  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Members Map</title>
      </Head>

      <main className={styles.main}>
        <Typography variant='h1'>Map</Typography>
        <div className={styles.dash}></div>
        <p className={styles.description}>
        Let us meet</p>
        <Wrapper apiKey={apiKeyMap}>
          <MyMapComponent center={center} zoom={zoom}>
          </MyMapComponent>
        </Wrapper>

        </main>
    </div>
    </Layout>
  )
}

export default Map

