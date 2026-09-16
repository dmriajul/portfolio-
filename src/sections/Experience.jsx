import { FaCircleCheck } from 'react-icons/fa6'
import Reveal from '../components/Reveal.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where the results were produced</h2>
          <p className="section-sub">
            Engagements and owned assets, with the campaign outcomes attached to each one.
          </p>
        </div>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.08} x={24} y={0}>
              <article className="exp-card">
                <div className="exp-head">
                  <h3>{job.role}</h3>
                  <span className="exp-period">{job.period}</span>
                </div>
                <p className="exp-company">{job.company}</p>
                <p className="exp-location">{job.location}</p>
                <p className="exp-summary">{job.summary}</p>

                <ul className="exp-highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>
                      <FaCircleCheck /> {h}
                    </li>
                  ))}
                </ul>

                <div className="badge-wrap" style={{ marginTop: 18 }}>
                  {job.skills.map((s) => (
                    <span className="chip chip-gold" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
