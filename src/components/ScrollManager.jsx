import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Keeps window scroll in sync with routing:
 *  - navigating to a new page scrolls to top
 *  - navigating to "/#services" scrolls to that section
 *  - back/forward restores the saved position
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      // Give the target section time to render before scrolling.
      const id = window.setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          const navOffset = 84
          const top = el.getBoundingClientRect().top + window.scrollY - navOffset
          window.scrollTo({ top, behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'auto' })
        }
      }, 90)
      return () => window.clearTimeout(id)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash, key])

  return null
}
