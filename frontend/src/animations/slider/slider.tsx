import { useState, CSSProperties, useEffect, ReactElement } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'
import styles from './slider.module.scss'

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => ReactElement)[] = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

export function Slider() {
  const [index, set] = useState(0)
  const onClick = () => set(state => (state + 1) % 3)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })

  useEffect(() => {
    transRef.start()
  }, [index, transRef])

  return (
    <div className={styles.container} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}