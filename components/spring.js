import { useSpring, animated } from 'react-spring'
import { useState } from 'react';



function Spring() {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      delay: 500,
    })
  
    return <animated.h2 style={props}>Welcome</animated.h2>
  }


export default Spring