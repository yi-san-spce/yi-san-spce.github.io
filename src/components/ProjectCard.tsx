import { ArrowUpRight, ChevronDown, Github, LockKeyhole } from 'lucide-react'
import { useCallback, useId, useState } from 'react'
import type { Project } from '../data/portfolio'
import { Lightbox } from './Lightbox'
import { ProjectGallery, ProjectMediaCover } from './ProjectMedia'
import { Reveal } from './Reveal'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const detailsId = useId()
  const galleryImages = project.visual?.kind === 'gallery' ? project.visual.images : null
  const closeLightbox = useCallback(() => setActiveImage(null), [])

  return (
    <Reveal>
      <article className={`project-card project-card--${project.statusTone}`}>
        <div className="project-card__header">
          <div className="project-id">
            <span>{project.number}</span>
            <small>{project.eyebrow}</small>
          </div>
          <div className={`project-status project-status--${project.statusTone}`}>
            <i />{project.status}
          </div>
        </div>

        <div className="project-card__body">
          <div className="project-copy">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="project-tags" aria-label="Technologies">
              {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <div className="project-actions">
              {project.githubUrl ? (
                <a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={17} aria-hidden="true" /> View on GitHub <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : (
                <span className="project-link project-link--disabled" aria-label="Private project; source code is not public">
                  <LockKeyhole size={16} aria-hidden="true" /> Private Project
                </span>
              )}
            </div>
          </div>

          <div className="project-preview">
            <ProjectMediaCover visual={project.visual} onOpenImage={setActiveImage} />
          </div>
        </div>

        <button
          className="case-toggle"
          type="button"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((value) => !value)}
        >
          <span>{expanded ? 'Close Case Study' : 'View Case Study'}</span>
          <ChevronDown size={18} aria-hidden="true" />
        </button>

        <div
          id={detailsId}
          className={`case-details ${expanded ? 'case-details--open' : ''}`}
          aria-hidden={!expanded}
          inert={!expanded}
        >
          <div className="case-details__clip">
            <div className="case-details__inner">
              {project.details.map((detail) => (
                <div className="case-detail" key={detail.label}>
                  <span>{detail.label}</span>
                  <h4>{detail.title}</h4>
                  <p>{detail.text}</p>
                </div>
              ))}
            </div>
            <ProjectGallery visual={project.visual} onOpenImage={setActiveImage} />
          </div>
        </div>

        {galleryImages && activeImage !== null && (
          <Lightbox images={galleryImages} initialIndex={activeImage} onClose={closeLightbox} />
        )}
      </article>
    </Reveal>
  )
}
