import { motion } from 'framer-motion'

/**
 * Scroll-triggered reveal wrapper.
 * Respects prefers-reduced-motion via the shared CSS media query, and
 * renders instantly when animations are disabled.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  once = true,
  className,
  as = 'div',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
