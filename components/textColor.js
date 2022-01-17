import { useSpring, animated } from 'react-spring'

export default function TextColor({className, text} ) {
  const props = useSpring({
    loop: true,
    to: [
      { color: 'black', },
    ],
    from: { color: 'yellow',},
    delay: 5000,
    config: { mass: 3, tension: 2000, friction: 200 },
  })
    return (
      <>
        <animated.h4 style={props} className={className}>{text}</animated.h4>

      </>
    )
}
