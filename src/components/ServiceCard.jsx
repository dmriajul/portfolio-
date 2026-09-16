import { Link } from 'react-router-dom'
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6'
import Reveal from './Reveal.jsx'
import Tilt3D from './Tilt3D.jsx'

/**
 * Service card for the home page.
 * CTA is "Get Started →" and links to the dedicated service page.
 */
export default function ServiceCard({ service, index = 0, previewItems = 4 }) {
  const Icon = service.icon
  const allItems = service.capabilityGroups.flatMap((g) => g.items.map((i) => i.name))
  const preview = allItems.slice(0, previewItems)

  return (
    <Reveal delay={index * 0.06} y={24}>
      <Tilt3D>
      <article className={`service-card${service.accent === 'gold' ? ' gold' : ''}`}>
        <div className="service-icon" aria-hidden="true">
          <Icon />
        </div>

        <div>
          <h3>{service.cardTitle}</h3>
          <p className="sub">{service.cardSubtitle}</p>
        </div>

        <p>{service.summary}</p>

        <ul className="service-card-list">
          {preview.map((item) => (
            <li key={item}>
              <FaCircleCheck /> {item}
            </li>
          ))}
        </ul>

        <div className="service-card-foot">
          <Link to={`/services/${service.slug}`} className="get-started">
            Get Started <FaArrowRight />
            <span className="sr-only">— {service.name} service page</span>
          </Link>
          <span className="service-card-count">{allItems.length} capabilities</span>
        </div>
      </article>
      </Tilt3D>
    </Reveal>
  )
}
