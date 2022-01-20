import Navbar from './navbar'
import NoiseBG from './noise'
import {ParticlesBG} from './particles'
import { useSpring, animated } from 'react-spring'
import { Paper } from '@mui/material'

export default function Layout({ children }) {
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
        <ParticlesBG/>
        <NoiseBG/>

      </>
    )
}

