import { useSpring, animated } from 'react-spring'

function Spring() {
    const props = useSpring({
      loop: true,
      to: [
        { opacity: 1, color: '#ffaaee' },
        { opacity: 0, color: 'rgb(14,26,19)' },
      ],
      from: { opacity: 0, color: 'red' },
    })
  
    return <animated.h2 style={props}>Welcome</animated.h2>
  }


export default Spring