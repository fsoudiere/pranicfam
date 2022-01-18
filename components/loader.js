import styles from './loader.module.scss'
import NoiseBG from './noise'
import { useSpring, animated } from 'react-spring'


function SVG_loading() {
    const { x } = useSpring({
      loop: true,
      from: { x: -2, },
      x: 1,
      delay: 0,
      config: { mass: 100, tension: 120, friction: 60 },
    })
  
    return (
      <animated.svg style={{ width: 100, height: 100}}
        viewBox="0 0 200 200"
        strokeWidth="4"
        fill="none"
        stroke='#998feb'
        transform="rotate(90 0 0)"
        strokeDasharray={156}
        strokeDashoffset={x.to(x => (1 - x) * 156)}>
        <path d="m53.5001,15l92.9999,0l-46.49995,85l46.49995,85l-93,0l46.50005,-85l-46.49995,-85z" 
        />
      </animated.svg>
    )
  }


export default function Loader() {
  const props = useSpring({
    to: [
      { opacity: 1, },
    ],
    from: { opacity: 0,},
    config: {duration: 2000,},
  })
    return (
      <animated.div style={props} className={styles.loadingwrap}>
        <SVG_loading/><NoiseBG/>
      </animated.div>
      

    )
  }