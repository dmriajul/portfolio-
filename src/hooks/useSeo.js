import { useEffect } from 'react'
import site from '../data/site.js'

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Lightweight per-page SEO (no extra dependency).
 * Sets <title>, description, canonical and Open Graph / Twitter tags.
 */
export default function useSeo({ title, description, path = '/' } = {}) {
  useEffect(() => {
    const fullTitle = title || `${site.name} | ${site.role}`
    const desc =
      description ||
      `${site.name} — ${site.role}. Social Media Marketing, Meta Ads, Google Ads, SEO, Analytics and CRO.`

    document.title = fullTitle

    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:type', 'website')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)

    const base = site.portfolioUrl.replace(/\/$/, '')
    setLink('canonical', `${base}${path}`)
    setMeta('property', 'og:url', `${base}${path}`)
  }, [title, description, path])
}
