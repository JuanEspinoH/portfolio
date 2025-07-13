import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const phrases = [
  'Los Flamencos National Reserve',
  'is a nature reserve located',
  'in the commune of San Pedro de Atacama',
  'The reserve covers a total area',
  'of 740 square kilometres (290 sq mi)',
]
function AnimatedText({ children }) {
  const text = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=400px bottom',
      },
      opacity: 0,
      left: '-200px',
      ease: 'power3.Out',
    })
  }, [])

  return <p ref={text}>{children}</p>
}
const index = () => {
  return (
    <div className={styles.description}>
      descripcion
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>
      })}
    </div>
  )
}

export default index
