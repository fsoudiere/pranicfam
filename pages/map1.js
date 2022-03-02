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

  let map;
  
  useEffect(() => {
    
    map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    // Create a <script> tag and set the USGS URL as the source.
    const script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
  });

  // Loop through the results array and place a marker for each
  // set of coordinates.
  const eqfeed_callback = function (results) {
    for (let i = 0; i < results.features.length; i++) {
      const coords = results.features[i].geometry.coordinates;
      const latLng = new google.maps.LatLng(coords[1], coords[0]);

      new google.maps.Marker({
        position: latLng,
        map: map,
      });
    }
  };

  return <div style={{ height: '100vh', width: '100%' }} ref={ref} id="map" />;
}

function Map1() {
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

export default Map1

