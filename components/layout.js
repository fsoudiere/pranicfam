import Navbar from './navbar'
import Footer from './footer'
import NoiseBG from './noise'
import {ParticlesBG, ParticlesHearts} from './particles'
import { useSpring, animated } from 'react-spring'
import { Paper } from '@mui/material'
import { useRouter } from 'next/router'


export default function Layout({ children }) {
  const router = useRouter()
  const props = useSpring({
    to: [
      { opacity: 1, },
    ],
    from: { opacity: 0,},
    config: {duration: 1000,},
  })
    return (
      <>
        <Navbar /><animated.main style={props}>{children}</animated.main>
        { router.pathname === '/apply/success' ? <ParticlesHearts/> : <ParticlesBG/> }
        <NoiseBG/>
        <Footer />

      </>
    )
}

