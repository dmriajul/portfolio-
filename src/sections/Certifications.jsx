import { FaAward, FaSquareArrowUpRight } from 'react-icons/fa6'
import Reveal from '../components/Reveal.jsx'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
  if (!certifications.length) return null

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow gold">Certifications</span>
          <h2 className="section-title">Credentials &amp; continuous learning</h2>
          <p className="section-sub">
            Platform certifications kept current alongside day-to-day campaign work.
          </p>
        </div>

        <div className="grid cert-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06} y={22}>
              <article className="cert-card">
                <span className="cert-icon" aria-hidden="true">
                  <FaAward />
                </span>
                <div>
                  <h3>{c.name}</h3>
                  <p>
                    {c.issuer}
                    {c.year ? ` · ${c.year}` : ''}
                  </p>
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noopener noreferrer">
                      View credential <FaSquareArrowUpRight />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
