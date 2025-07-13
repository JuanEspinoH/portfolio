'use client'
import { useEffect } from 'react'
import styles from './page.module.css'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Description from '../components/Description'

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  return (
    <main className="flex flex-col bg-black">
      <Intro />
      <Description />
      <Projects />
    </main>
  )
}
