import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


export function SVG_moon() {
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
        transform="rotate(0 0 0)"
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
        <path id="svg_7" d="m147,173.5l0,0c-51.91016,0 -94,-32.90129 -94,-73.5c0,-40.59351 42.08984,-73.5 94,-73.5l0,0c-29.58363,17.35041 -46.99677,44.58265 -46.99677,73.5s17.41315,56.14439 46.99677,73.5z"/>
 </animated.svg>
    )
  }
