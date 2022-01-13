import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


export function SVG_scroll({style}) {
    const { x } = useSpring({
      loop: true,
      from: { x: -2 },
      x: 1,
      delay: 0,
      config: { mass: 100, tension: 180, friction: 12 },
    })
  
    return (
      <animated.svg style={style}
        viewBox="0 0 200 200"
        strokeWidth="8"
        fill="none"
        stroke="rgb(153, 143, 235)"
        strokeDasharray={156}
        transform="rotate(90 0 0)"
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
        <path id="svg_3" d="m154.22894,95.51201l-42.06171,-66.00003l27.70096,0l42.06171,66.00003l-42.06171,65.99997l-27.70096,0l42.06171,-65.99997z"/>
   <path id="svg_4" d="m72.50291,100.00003l-54.43281,-88.00004l35.8483,0l54.43281,88.00004l-54.43281,87.99997l-35.8483,0l54.43281,-87.99997z"/>
  </animated.svg>
    )
  }
