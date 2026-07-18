import { ArrowDownRight, BrainCircuit, Compass, RefreshCw } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const values = [
  { icon: BrainCircuit, index: '01', title: 'AI Application', text: '让模型能力进入真实产品' },
  { icon: Compass, index: '02', title: 'Product Thinking', text: '从需求出发构建 MVP' },
  { icon: RefreshCw, index: '03', title: 'Continuous Learning', text: '在实践和反馈中持续进化' },
]

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="About the Lab"
            title="A personal space for turning curiosity into products."
          />
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-statement">
            <p className="about-lead">
              Yisan AI Lab 是一个 <em>AI 产品实验空间</em>，记录我使用人工智能探索软件开发、产品设计和未来创造方式的过程。
            </p>
            <div className="about-note">
              <ArrowDownRight size={20} aria-hidden="true" />
              <p>好奇驱动创造，探索未知边界</p>
            </div>
          </Reveal>

          <div className="value-stack">
            {values.map(({ icon: Icon, index, title, text }, itemIndex) => (
              <Reveal key={title} delay={itemIndex * 90}>
                <article className="value-card glass-panel">
                  <span className="value-card__index">{index}</span>
                  <div className="value-card__icon"><Icon size={22} strokeWidth={1.6} /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
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
