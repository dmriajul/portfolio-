/**
 * Injects JSON-LD structured data (SEO / AEO / GEO).
 * Search engines AND generative answer engines use this to understand
 * who the author is, what the service includes and which FAQs exist.
 */
export default function JsonLd({ data }) {
  if (!data) return null
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
