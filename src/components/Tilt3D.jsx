import { useRef, useCallback } from 'react'

/**
 * Pointer-driven 3D tilt + moving glare + depth pop.
 * Children can use translateZ (preserve-3d) for layered depth.
 * Disabled on touch devices and for prefers-reduced-motion (CSS).
 */
export default function Tilt3D({
  children,
  className = '',
  max = 9,
  glare = true,
  scale = 1.015,
  ...rest
}) {
  const ref = useRef(null)

  const onMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rx = (0.5 - py) * max * 2
      const ry = (px - 0.5) * max * 2
      el.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(
        2
      )}deg) scale3d(${scale}, ${scale}, ${scale})`
      el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`)
      el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`)
    },
    [max, scale]
  )

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }, [])

  return (
    <div
      ref={ref}
      className={`tilt3d${glare ? ' tilt-glare' : ''} ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </div>
  )
}
