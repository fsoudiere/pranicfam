import Navbar from './navbar'
import NoiseBG from './noise'
import {ParticlesBG} from './particles'
import { useSpring, animated } from 'react-spring'
import HeadTags from './head'


export default function Layout({ children }) {
  const props = useSpring({
    to: [
      { opacity: 1, },
    ],
    from: { opacity: 0,},
    config: {duration: 2000,},
  })
    return (
      <>
        <HeadTags />
        <Navbar />
        <animated.main style={props}>{children}</animated.main>
        <ParticlesBG/>
        <NoiseBG/>

      </>
    )
  }