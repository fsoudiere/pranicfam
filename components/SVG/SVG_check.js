import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


function SVG_check() {
    const { x } = useSpring({
      loop: true,
      from: { x: -2 },
      x: 1,
      delay: 0,
      config: { mass: 100, tension: 180, friction: 12 },
    })
  
    return (
      <animated.svg style={{ width: 32, height: 32}}
        viewBox="0 0 200 200"
        strokeWidth="8"
        fill="none"
        stroke="rgb(153, 143, 235)"
        strokeDasharray={156}
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
        <path d="m12.50001,90.96124l18.80412,-19.80619l51.51359,54.23257l85.8715,-90.38762l18.81077,19.7922l-104.68227,110.20781" />
      </animated.svg>
    )
  }

  export default SVG_check