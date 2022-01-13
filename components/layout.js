import Navbar from './navbar'
import NoiseBG from './noise'
import { useSpring, animated } from 'react-spring'


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
        
        <Navbar />
        <animated.main style={props}>{children}</animated.main>
        <NoiseBG/>

      </>
    )
  }