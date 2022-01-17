import { useSpring, animated } from 'react-spring'

export default function TextColor({className, text} ) {
  const props = useSpring({
    loop: true,
    to: [
      { color: '#000000', },
    ],
    from: { color: 'yellow',},
    delay: 3000,
    config: { mass: 2, tension: 2000, friction: 200 },
  })
    return (
      <>
        <animated.h4 style={props} className={className}>{text}</animated.h4>

      </>
    )
}
