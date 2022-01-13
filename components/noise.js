import styles from './noise.module.scss'
import { useSpring, animated } from 'react-spring'

export default function NoiseBG() {
  const props = useSpring({
    loop: true,
    to: [
      { opacity: 1, },
      { opacity: 0.7, },
    ],
    from: { opacity: 0.7,},
    config: {duration: 5000,},
  })
    return (
      <>
        <section>
          <div className={styles.isolate}>
            <div className={styles.noise}></div>
            <div className={styles.overlay}></div>
          </div>
        </section>

      </>
    )
}
//<animated.div style={props} className={styles.noise}></animated.div>
