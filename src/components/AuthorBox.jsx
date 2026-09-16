import { FaCircleCheck, FaCalendarDays } from 'react-icons/fa6'
import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaGlobe } from 'react-icons/fa6'
import site from '../data/site.js'

const socialIcons = { linkedin: FaLinkedinIn, facebook: FaFacebookF, x: FaXTwitter, website: FaGlobe }

/**
 * EEAT "Experience / Expertise / Authoritativeness / Trust" author box.
 * Shows who is responsible for the content on the page, their credentials
 * and when the page was last reviewed — signals search and answer engines
 * (and hiring managers) use to judge trustworthiness.
 */
export default function AuthorBox({ updated = site.contentUpdated, compact = false }) {
  const date = new Date(updated).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <aside className={`author-box${compact ? ' compact' : ''}`} itemScope itemType="https://schema.org/Person">
      <img
        className="author-photo"
        src={site.profileImage}
        alt={`${site.name}, ${site.role}`}
        width="72"
        height="72"
        loading="lazy"
        itemProp="image"
      />

      <div className="author-body">
        <p className="author-kicker">Written &amp; delivered by</p>
        <p className="author-name" itemProp="name">
          {site.name}
        </p>
        <p className="author-role" itemProp="jobTitle">
          {site.role} · {site.location}
        </p>

        <ul className="author-creds">
          <li>
            <FaCircleCheck /> {site.yearsExperience} years in digital marketing,{' '}
            {site.yearsManaging} years managing paid campaigns
          </li>
          <li>
            <FaCircleCheck /> {site.certificationCount} certifications — Google, Meta, Coursera,
            HubSpot, SEMrush, Simplilearn
          </li>
          <li>
            <FaCircleCheck /> Founder of Riajul Tech — 174K organic impressions in 3 months
          </li>
        </ul>

        <div className="author-meta">
          <span className="author-updated">
            <FaCalendarDays /> Content last reviewed {date}
          </span>
          <span className="author-socials">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.id] || FaGlobe
              return (
                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} itemProp="sameAs">
                  <Icon />
                </a>
              )
            })}
          </span>
        </div>
      </div>
    </aside>
  )
}
