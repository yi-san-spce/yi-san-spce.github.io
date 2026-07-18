import { Braces, Boxes, WandSparkles } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const iconMap = {
  ai: WandSparkles,
  programming: Braces,
  tools: Boxes,
}

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-orb section-orb--skills" />
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Technical Skills"
            title="Tools are leverage. Systems are the advantage."
            description="持续扩展技术边界，也关注如何将不同能力组合成一条高效、可验证的开发工作流。"
          />
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => {
            const Icon = iconMap[group.id]
            return (
              <Reveal key={group.id} delay={groupIndex * 90}>
                <article className="skill-card glass-panel">
                  <div className="skill-card__top">
                    <span>{group.eyebrow}</span>
                    <div className="skill-card__icon"><Icon size={24} strokeWidth={1.5} /></div>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="skill-list">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
