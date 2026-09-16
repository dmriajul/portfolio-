import { useRef } from 'react'

/**
 * Cursor-tracking spotlight card.
 * Sets --mx / --my on the element; CSS paints a soft radial glow there.
 * Disabled automatically for touch devices and reduced-motion users (CSS).
 */
export default function Spotlight({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag ref={ref} className={`spotlight ${className}`.trim()} onMouseMove={onMove} {...rest}>
      {children}
    </Tag>
  )
}
