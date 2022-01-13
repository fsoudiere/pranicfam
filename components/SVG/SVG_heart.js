import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


export function SVG_heart() {
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
        <path id="svg_3" d="m74.74365,160.19735c-45.38475,-36.59202 -61.61161,-59.73947 -61.74312,-88.07614c-0.11993,-25.83235 19.91129,-50.76437 40.67011,-50.62059c10.36603,0.07194 32.60183,9.57966 40.4756,17.30705c3.96727,3.89351 5.84636,3.50957 14.67906,-2.99925c24.03889,-17.71423 47.51311,-18.08604 62.71605,-0.9933c24.29752,27.3178 19.87389,59.94024 -12.71644,93.77852c-17.32689,17.99039 -55.16503,49.90636 -59.16671,49.90636c-1.21766,0 -12.4292,-8.23621 -24.91456,-18.30265l0,0.00001z"/>
 </animated.svg>
    )
  }
