import { useSpring, animated } from 'react-spring'
import Image from 'next/image';



function Toggle({src}) {
    const styles = useSpring( {
      loop: true,
      to: [
        { opacity: 1.000 },
        { opacity: 0.001 },
      ],
      from: { opacity: 0.001},
      delay: 500,
      config: { duration: 5000, mass: 1, tension: 280, friction: 120 },
    })
    return (
        <animated.div style={styles}>
          <Image
            src={src} // Route of the image file
            width="620"
            height="620"
            alt="Fam"
            priority
            className="clipped"
            />
        </animated.div>
    )
  }

  export default Toggle