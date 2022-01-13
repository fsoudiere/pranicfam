import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


export function SVG_logo() {
    const { x } = useSpring({
      loop: true,
      from: { x: -2 },
      x: 1,
      delay: 0,
      config: { mass: 100, tension: 120, friction: 60 },
    })
  
    return (
      <animated.svg style={{ width: 50, height: 50}}
        viewBox="0 0 200 200"
        strokeWidth="6"
        fill="none"
        stroke="rgb(153, 143, 235)"
        transform="rotate(90 0 0)"
        strokeDasharray={156}
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
        <path d="m53.5001,15l92.9999,0l-46.49995,85l46.49995,85l-93,0l46.50005,-85l-46.49995,-85z" 
        />
      </animated.svg>
    )
  }

