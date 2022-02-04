import Navbar from './navbar'
import Footer from './footer'
import NoiseBG from './noise'
import {ParticlesBG, ParticlesHearts} from './particles'
import { useSpring, animated } from 'react-spring'
import Router from 'next/router'
import { useEffect } from "react";


export default function Layout({ children }) {
  const {pathname} = Router

    useEffect(() => {
        if(pathname == '/apply/success' ){
          return <ParticlesHearts/>
        }else{
            return <ParticlesBG/>
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
        { pathname === '/business' ? null : <Navbar /> }
        <animated.main style={props}>{children}</animated.main>
        <NoiseBG/>
        <Footer />

      </>
    )
}

