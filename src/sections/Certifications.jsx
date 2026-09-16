import { FaCircleCheck, FaGraduationCap } from 'react-icons/fa6'
import Reveal from '../components/Reveal.jsx'
import Tilt3D from '../components/Tilt3D.jsx'
import { certProviders, education, certifications } from '../data/certifications.js'

/**
 * Certifications & Education — real credentials grouped by provider,
 * with the provider logo and the individual courses/certifications.
 */
export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow gold">Certifications</span>
          <h2 className="section-title">
            {certifications.length}+ credentials across{' '}
            <span className="gold-text">{certProviders.length} platforms</span>
          </h2>
          <p className="section-sub">
            Industry certifications kept current alongside day-to-day campaign work — Google, Meta,
            Coursera, HubSpot, SEMrush and Simplilearn.
          </p>
        </div>

        <div className="grid grid-3 cert-grid">
          {certProviders.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06} y={24}>
              <Tilt3D className="cert-tilt">
                <article className="cert-card">
                <div className="cert-card-head">
                  <img className="cert-logo" src={p.logo} alt={`${p.name} logo`} loading="lazy" width="44" height="44" />
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.focus}</p>
                  </div>
                </div>
                <ul className="cert-items">
                  {p.items.map((item) => (
                    <li key={item}>
                      <FaCircleCheck /> {item}
                    </li>
                  ))}
                </ul>
                </article>
                </Tilt3D>
            </Reveal>
          ))}
        </div>

        {/* ---------- Education ---------- */}
        <div className="section-head center" style={{ marginTop: 'clamp(44px,6vw,70px)', marginBottom: 30 }}>
          <span className="eyebrow">Education</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(22px,3.2vw,30px)' }}>
            Academic background
          </h2>
        </div>

        <div className="grid grid-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.07} y={22}>
              <Tilt3D className="edu-tilt">
                <article className="edu-card">
                <span className="edu-icon" aria-hidden="true">
                  <FaGraduationCap />
                </span>
                <h3>{e.degree}</h3>
                <p className="edu-inst">{e.institute}</p>
                <p className="edu-meta">
                  {e.period && <span>{e.period}</span>}
                  {e.period && e.result && <span className="dot">·</span>}
                  {e.result && <span>{e.result}</span>}
                </p>
                </article>
                </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
