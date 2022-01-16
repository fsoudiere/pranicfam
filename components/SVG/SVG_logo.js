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

export function SVG_logo1() {
  const { x } = useSpring({
    loop: true,
    from: { x: -3 },
    x: 1,
    delay: 0,
    config: { mass: 10, tension: 120, friction: 60 },
  })

  return (
    <animated.svg style={{ width: 70, height: 70}}
      viewBox="0 0 600 600"
      strokeWidth="16"
      fill="none"
      stroke="rgb(153, 143, 235)"
      strokeDasharray={60}
      strokeDashoffset={x.to(x => (1 - x) * 60)}>
      <path d="m48.77665,293.21477c0,0 10.43007,-94.97745 112.04484,-105.13892c101.61477,-10.16148 141.99208,92.43708 141.99208,92.43708c0,0 63.47363,121.02513 142.26067,124.47809c78.78704,3.45296 109.23587,-63.50923 106.6955,-109.23587c-2.54037,-45.72664 -39.05373,-104.45933 -107.23269,-102.56295c-68.17897,1.89638 -98.00002,55.11794 -132.617,108.43009c-34.61698,53.31215 -50.89797,109.39767 -145.60683,110.98985c-94.70885,1.59218 -123.2257,-92.84808 -117.53657,-119.39735z"
      />
    </animated.svg>
  )
}

  

