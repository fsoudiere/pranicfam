import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


export  function SVG_next({style, stroke}) {
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
        strokeWidth="10"
        fill="none"
        stroke={stroke}
        transform="rotate(90 0 0)"
        strokeDasharray={156}
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
        <path d="m15.005,187.43495l86,-173.99999l86,173.99999l-172,0z"/>
        </animated.svg>
    )
  }

  export  function SVG_fire() {
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
        strokeWidth="10"
        fill="none"
        stroke="rgb(153, 143, 235)"
        transform="rotate(0 0 0)"
        strokeDasharray={156}
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
        <path d="m15.005,187.43495l86,-173.99999l86,173.99999l-172,0z"/>
        </animated.svg>
    )
  }

  export  function SVG_water() {
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
        strokeWidth="10"
        fill="none"
        stroke="rgb(153, 143, 235)"
        transform="rotate(180 0 0)"
        strokeDasharray={156}
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
        <path d="m15.005,187.43495l86,-173.99999l86,173.99999l-172,0z"/>
        </animated.svg>
    )
  }

  export  function SVG_air() {
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
        strokeWidth="10"
        fill="none"
        stroke="rgb(153, 143, 235)"
        transform="rotate(0 0 0)"
        strokeDasharray={156}
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
           <path  id="svg_3" d="m7.50001,193.5l92.49999,-187l92.49999,187l-184.99998,0z" fill="none"/>
   <line  id="svg_4" y2="85.52854" x2="179.675" y1="86.52854" x1="21.67499" fill="none"/>
        </animated.svg>
    )
  }
  export  function SVG_earth() {
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
        strokeWidth="10"
        fill="none"
        stroke="rgb(153, 143, 235)"
        transform="rotate(180 0 0)"
        strokeDasharray={156}
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
           <path  id="svg_3" d="m7.50001,193.5l92.49999,-187l92.49999,187l-184.99998,0z" fill="none"/>
   <line  id="svg_4" y2="85.52854" x2="179.675" y1="86.52854" x1="21.67499" fill="none"/>
        </animated.svg>
    )
  }
