import { useState } from 'react'
import site from '../data/site.js'

/**
 * Profile image with a graceful fallback.
 *
 * TODO: drop your photo at  public/profile.jpg  (square, 800x800 or larger).
 * Until then — or if the file fails to load — an initials card is rendered,
 * so the layout never shows a broken image.
 */
export default function Avatar({ src = '/profile.jpg', initials = 'KR' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="avatar-inner">
      {!failed ? (
        <img
          src={src}
          alt={`${site.name} — ${site.role}`}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="avatar-fallback" role="img" aria-label={`${site.name} profile placeholder`}>
          <span className="avatar-initials">{initials}</span>
          <small>{site.role}</small>
        </div>
      )}
    </div>
  )
}
