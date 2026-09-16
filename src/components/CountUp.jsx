import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/**
 * Animated count-up number (used in hero + about bento).
 * Respects prefers-reduced-motion by jumping straight to the value.
 */
export default function CountUp({ value, suffix = '', prefix = '', duration = 1.4, decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView || !ref.current) return undefined

    if (reduce) {
      ref.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`
      return undefined
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix, prefix, duration, decimals, reduce])

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}0{suffix}
    </span>
  )
}
