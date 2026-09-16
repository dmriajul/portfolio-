import { FaCircleCheck, FaDiagramProject } from 'react-icons/fa6'
import Reveal from './Reveal.jsx'

/** Case-study card built on real campaign numbers. */
export default function ProjectCard({ project, index = 0, showApproach = true }) {
  return (
    <Reveal delay={index * 0.07} y={30}>
      <article className="project-card">
        <div className="project-top">
          <span className="project-cat">
            <FaDiagramProject /> {project.category}
          </span>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
        </div>

        <div className="metric-grid">
          {project.metrics.map((m) => (
            <div className="metric" key={m.label}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        {showApproach && project.approach?.length > 0 && (
          <div className="project-body">
            <h4>How it was done</h4>
            <ul className="project-approach">
              {project.approach.map((a) => (
                <li key={a}>
                  <FaCircleCheck /> {a}
                </li>
              ))}
            </ul>
            <div className="project-tags">
              {project.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </Reveal>
  )
}
