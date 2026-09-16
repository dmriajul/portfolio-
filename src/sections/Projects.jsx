import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { services } from '../data/services.js'

const FILTERS = [
  { id: 'all', label: 'All Work' },
  ...services.map((s) => ({ id: s.slug, label: s.shortName })),
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((p) => p.services.includes(filter)),
    [filter]
  )

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Case Studies</span>
          <h2 className="section-title">
            Real campaigns, <span className="accent">real numbers</span>
          </h2>
          <p className="section-sub">
            No “higher CTR” or “better ROAS” placeholders — every figure below comes from a live
            account. Filter by the channel you care about.
          </p>
        </div>

        <Reveal y={16}>
          <div className="badge-wrap" style={{ marginTop: 0, marginBottom: 30 }}>
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`chip${filter === f.id ? ' chip-gold' : ''}`}
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                style={{ cursor: 'pointer' }}
              >
                {f.label}
                <span className="sr-only">
                  {filter === f.id ? ' (active filter)' : ''}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-2">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-muted text-center mt-3">
            No case studies published for this channel yet — more are being added.
          </p>
        )}
      </div>
    </section>
  )
}
