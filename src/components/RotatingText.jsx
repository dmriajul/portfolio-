import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/** Cycles through role headlines with a slide/blur transition. */
export default function RotatingText({ words = [], interval = 2600, className = '' }) {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || words.length < 2) return undefined
    const id = window.setInterval(() => setI((v) => (v + 1) % words.length), interval)
    return () => window.clearInterval(id)
  }, [words.length, interval, reduce])

  return (
    <span className={`rotating-wrap ${className}`.trim()}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          className="rotating-text"
          initial={reduce ? false : { y: '0.6em', opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={reduce ? undefined : { y: '-0.6em', opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">{words.join(', ')}</span>
    </span>
  )
}
