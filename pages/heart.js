import Layout from '../components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Typography, Grid } from '@mui/material';
import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Suspense } from 'react'
import Model from '../components/heart'


function Heart({}) {
  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Welcome Home</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <meta property="og:url" content='https://pranicfamily.com/' key="ogurl" />
        <meta property="og:image" content='/images/joy.jpg' key="ogimage" />
        <meta property="og:title" content='Welcome Home' key="ogtitle" />
        <meta property="og:description" content='Inspiring being to live Joyfully Free' key="ogdesc" />
      </Head>

      <main className={styles.three}>
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Model scale='1' position={[0, 0, 0]}/>
                <Environment preset="dawn" />
            </Suspense>
        </Canvas>

        </main>
    </div>
    </Layout>
  )
}

export default Heart