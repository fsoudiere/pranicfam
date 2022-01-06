import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


function SVG() {
    const [flip, set] = useState(false)
    const { x } = useSpring({
      reset: true,
      reverse: flip,
      from: { x: 0 },
      x: 1,
      delay: 200,
      config: { mass: 1, tension: 280, friction: 120 },
      onRest: () => set(!flip),
    })
  
    return (
      <animated.svg style={{ width: 50, height: 50}}
        viewBox="0 0 200 200"
        strokeWidth="2"
        fill="white"
        stroke="rgb(45, 55, 71)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={156}
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
        <polygon points="100,10 40,198 190,78 10,78 160,198" />
      </animated.svg>
    )
  }

  export default SVG