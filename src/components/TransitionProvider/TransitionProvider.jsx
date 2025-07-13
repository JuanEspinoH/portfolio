'use client'
import { useState, useEffect, useLayoutEffect } from 'react'

export default function TransitionProvider({ children }) {
  const [content, setContent] = useState(children)

  useEffect(() => {
    console.log(content)
    const setT = setTimeout(() => {
      console.log('cambio')
    }, 1000)

    return () => clearTimeout(setT)
  }, [children])

  return <div>{content}</div>
}
