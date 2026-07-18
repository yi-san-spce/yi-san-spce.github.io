import { ArrowRight, Braces, FileCode2, FolderTree, Image, Sparkles } from 'lucide-react'
import type { GalleryVisual, ProjectImage, ProjectVisual, WorkflowVisual } from '../data/portfolio'

interface ProjectMediaCoverProps {
  visual?: ProjectVisual
  onOpenImage: (index: number) => void
}

interface ProjectGalleryProps {
  visual?: ProjectVisual
  onOpenImage: (index: number) => void
}

function WindowChrome({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`media-chrome ${compact ? 'media-chrome--compact' : ''}`} aria-hidden="true">
      <i /><i /><i /><span />
    </div>
  )
}

function MediaButton({ image, index, className, onOpen }: {
  image: ProjectImage
  index: number
  className: string
  onOpen: (index: number) => void
}) {
  return (
    <button
      type="button"
      className={`${className} media-frame media-frame--${image.frame}`}
      onClick={() => onOpen(index)}
      aria-label={`Open screenshot: ${image.alt}`}
    >
      {image.frame !== 'phone' && <WindowChrome compact={image.frame === 'app-window'} />}
      {image.frame === 'phone' && <span className="phone-speaker" aria-hidden="true" />}
      <img src={image.src} alt="" loading="lazy" decoding="async" />
    </button>
  )
}

function GalleryCover({ visual, onOpenImage }: { visual: GalleryVisual; onOpenImage: (index: number) => void }) {
  if (visual.coverLayout === 'desktop-stack') {
    return (
      <div className="media-cover media-cover--desktop-stack">
        <div className="media-cover__glow" />
        <MediaButton image={visual.images[0]} index={0} className="desktop-stack__main" onOpen={onOpenImage} />
        <MediaButton image={visual.images[1]} index={1} className="desktop-stack__float" onOpen={onOpenImage} />
        <span className="media-cover__hint">Open preview ↗</span>
      </div>
    )
  }

  if (visual.coverLayout === 'device-stack') {
    return (
      <div className="media-cover media-cover--device-stack">
        <div className="media-cover__glow" />
        {visual.images.slice(0, 3).map((image, index) => (
          <MediaButton key={image.src} image={image} index={index} className={`device-stack__item device-stack__item--${index + 1}`} onOpen={onOpenImage} />
        ))}
        <span className="media-cover__hint">User → Order → Admin</span>
      </div>
    )
  }

  return (
    <div className="media-cover media-cover--app-stack">
      <div className="media-cover__glow" />
      {visual.images.slice(0, 3).map((image, index) => (
        <MediaButton key={image.src} image={image} index={index} className={`app-stack__item app-stack__item--${index + 1}`} onOpen={onOpenImage} />
      ))}
      <span className="media-cover__hint">Focus · Short break · Long break</span>
    </div>
  )
}

function WorkflowCover({ visual }: { visual: WorkflowVisual }) {
  return (
    <div className="workflow-cover">
      <div className="workflow-cover__topbar">
        <span><Braces size={15} /> DEVELOPER ARTIFACT</span>
        <small>workflow.yml</small>
      </div>
      <div className="workflow-cover__stages">
        {visual.stages.map((stage, index) => (
          <div className="workflow-stage" key={stage.index}>
            <div className="workflow-stage__meta"><span>{stage.index}</span>{stage.label}</div>
            <strong>{stage.title}</strong>
            <div>{stage.items.map((item) => <span key={item}>{item}</span>)}</div>
            {index < visual.stages.length - 1 && <ArrowRight className="workflow-stage__arrow" size={18} />}
          </div>
        ))}
      </div>
      <div className="workflow-cover__terminal">
        <span><i /> build verified</span>
        <code>gcc -Wall -Wextra -std=c11 · 0 warnings</code>
      </div>
    </div>
  )
}

export function ProjectMediaCover({ visual, onOpenImage }: ProjectMediaCoverProps) {
  if (!visual) {
    return (
      <div className="preview-placeholder">
        <div className="preview-placeholder__toolbar"><i /><i /><i /><span /></div>
        <div className="preview-placeholder__content">
          <div className="preview-symbol"><Image size={24} strokeWidth={1.4} /></div>
          <span>PROJECT PREVIEW</span>
          <strong>Coming soon</strong>
          <small>Screenshot space reserved</small>
        </div>
      </div>
    )
  }

  return visual.kind === 'gallery'
    ? <GalleryCover visual={visual} onOpenImage={onOpenImage} />
    : <WorkflowCover visual={visual} />
}

function WorkflowArtifacts({ visual }: { visual: WorkflowVisual }) {
  return (
    <section className="workflow-artifacts" aria-label="Workflow implementation artifacts">
      <div className="project-gallery__heading">
        <div><small>DEVELOPER ARTIFACTS</small><h4>Evidence behind the workflow</h4></div>
        <span><Sparkles size={14} /> Real files, real outputs</span>
      </div>
      <div className="workflow-artifacts__grid">
        <div className="artifact-panel artifact-panel--tree">
          <div><FolderTree size={16} /><span>Repository tree</span></div>
          <code>
            {visual.fileTree.map((file, index) => (
              <span key={file}><i>{index === visual.fileTree.length - 1 ? '└─' : '├─'}</i>{file}</span>
            ))}
          </code>
        </div>
        <div className="artifact-panel artifact-panel--logic">
          <div><FileCode2 size={16} /><span>Core structures</span></div>
          <div className="artifact-chips">
            {visual.artifacts.map((artifact, index) => (
              <span key={artifact}><small>0{index + 1}</small>{artifact}</span>
            ))}
          </div>
          <p>代码、运行结果、结构图与报告内容保持相互对应。</p>
        </div>
      </div>
    </section>
  )
}

export function ProjectGallery({ visual, onOpenImage }: ProjectGalleryProps) {
  if (!visual) return null
  if (visual.kind === 'workflow') return <WorkflowArtifacts visual={visual} />

  return (
    <section className={`project-gallery project-gallery--${visual.coverLayout}`} aria-label="Project screenshot gallery">
      <div className="project-gallery__heading">
        <div><small>INTERFACE WALKTHROUGH</small><h4>Selected product moments</h4></div>
        <button type="button" onClick={() => onOpenImage(0)}>
          View all {visual.images.length}<ArrowRight size={15} />
        </button>
      </div>
      <div className="project-gallery__grid">
        {visual.featured.map((imageIndex, featuredIndex) => {
          const image = visual.images[imageIndex]
          return (
            <figure className={`gallery-item gallery-item--${image.frame} gallery-item--position-${featuredIndex + 1}`} key={image.src}>
              <button type="button" onClick={() => onOpenImage(imageIndex)} aria-label={`Open screenshot: ${image.alt}`}>
                <span className="gallery-item__mat">
                  {image.frame !== 'phone' && <WindowChrome compact={image.frame === 'app-window'} />}
                  {image.frame === 'phone' && <span className="phone-speaker" aria-hidden="true" />}
                  <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                </span>
                <span className="gallery-item__zoom">↗</span>
              </button>
              <figcaption><span>{String(featuredIndex + 1).padStart(2, '0')}</span>{image.caption}</figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
