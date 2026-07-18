import { projects } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="page-shell">
        <Reveal>
          <div className="projects-heading">
            <SectionHeading
              index="03"
              eyebrow="Selected Projects"
              title="Built by exploring. Improved by shipping."
              description="每个项目都是一次从问题、判断到可运行结果的完整练习。"
            />
            <span className="projects-count">04 selected builds</span>
          </div>
        </Reveal>

        <div className="projects-list">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  )
}
