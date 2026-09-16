import { FaStar } from 'react-icons/fa6'

/** Infinite marquee of capability keywords — used between hero and about. */
const ITEMS = [
  'Social Media Strategy',
  'Meta Ads',
  'Google Ads',
  'Organic Social Management',
  'Content Pillars',
  'Reels Strategy',
  'Retargeting',
  'A/B Testing',
  'GA4 & GTM',
  'Technical SEO',
  'Topic Clusters',
  'Caption & Copywriting',
  'Community Engagement',
  'Conversion Rate Optimization',
  'Monthly Performance Reports',
]

export default function Strip() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-tilt">
      <div className="strip-track">
        {doubled.map((item, i) => (
          <span className="strip-item" key={`${item}-${i}`}>
            <FaStar /> {item}
          </span>
        ))}
      </div>
      </div>
    </div>
  )
}
