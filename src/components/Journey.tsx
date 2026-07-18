import { timeline } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Growth Journey"
            title="Still learning. Already building."
            description="成长不是一条完成的路线，而是不断扩大的问题空间。"
          />
        </Reveal>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 100}>
              <article className={`timeline-item ${item.current ? 'timeline-item--current' : ''}`}>
                <div className="timeline-dot"><i /></div>
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-content glass-panel">
                  {item.current && <small>YOU ARE HERE</small>}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div>
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
