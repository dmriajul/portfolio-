import { FaCircleCheck } from 'react-icons/fa6'
import Reveal from '../components/Reveal.jsx'
import Tilt3D from '../components/Tilt3D.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Skills &amp; Expertise</span>
          <h2 className="section-title">Everything that goes into a growth channel</h2>
          <p className="section-sub">
            Strategy, execution and measurement grouped by discipline — so you can see exactly which
            part of the funnel I own.
          </p>
        </div>

        <div className="grid grid-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <Reveal key={group.title} delay={i * 0.06} y={26} rx={8}>
                <Tilt3D>
                <article className="skill-card">
                  <div className="skill-card-head">
                    <span className="skill-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="skill-list">
                    {group.skills.map((s) => (
                      <li key={s}>
                        <FaCircleCheck /> {s}
                      </li>
                    ))}
                  </ul>
                </article>
                </Tilt3D>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
