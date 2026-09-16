import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient bar at the very top showing page scroll progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return <motion.div className="scroll-progress" style={{ scaleX, width: '100%' }} />
}
