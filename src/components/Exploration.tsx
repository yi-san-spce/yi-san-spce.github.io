import { ArrowUpRight, FlaskConical } from 'lucide-react'
import { labLogs } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Exploration() {
  return (
    <section id="lab" className="section lab-section">
      <div className="lab-glow" />
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="AI Exploration Lab"
            title="Experiments, notes and evolving questions."
            description="这里不只展示完成的结果，也记录我如何与 AI 协作、拆解问题，以及重新思考产品。"
          />
        </Reveal>

        <div className="lab-console glass-panel">
          <div className="lab-console__header">
            <div><FlaskConical size={18} strokeWidth={1.6} /><span>LAB NOTEBOOK</span></div>
            <span>3 active directions</span>
          </div>
          <div className="lab-logs">
            {labLogs.map((log, index) => (
              <Reveal key={log.index} delay={index * 90}>
                <article className="lab-log">
                  <div className="lab-log__meta">
                    <span>{log.index}</span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </div>
                  <h3>{log.title}</h3>
                  <small>{log.subtitle}</small>
                  <p>{log.description}</p>
                  <div className="lab-log__practices">
                    {log.practices.map((practice) => <span key={practice}>{practice}</span>)}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
