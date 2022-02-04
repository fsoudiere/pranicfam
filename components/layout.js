import Navbar from './navbar'
import Footer from './footer'
import NoiseBG from './noise'
import {ParticlesBG, ParticlesHearts} from './particles'
import { useSpring, animated } from 'react-spring'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';


export default function Layout({ children }) {
  const router = useRouter()
  useEffect(() => {
      if(router.pathname === '/apply/success' ){
        ReactDOM.render(<ParticlesHearts />, document.getElementById('after') )
      }else{
        ReactDOM.render(<ParticlesBG />, document.getElementById('after') )
      }
      },[]);

  const props = useSpring({
    to: [
      { opacity: 1, },
    ],
    from: { opacity: 0,},
    config: {duration: 1000,},
  })
    return (
      <>
        { router.pathname === '/business' ? null : <Navbar /> }
        <animated.main style={props}>{children}</animated.main>
        <div id="after"></div>
        <NoiseBG/>
        <Footer />

      </>
    )
}

