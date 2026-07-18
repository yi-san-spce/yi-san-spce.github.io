import { ArrowUpRight, Github, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="page-shell">
        <Reveal>
          <div className="contact-card">
            <div className="contact-glow" />
            <div className="contact-card__eyebrow"><i /> OPEN TO NEW IDEAS</div>
            <h2>Let&apos;s build something<br /><span>meaningful with AI.</span></h2>
            <p>无限进步，欢迎交流有趣的产品想法</p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <span><Mail size={19} aria-hidden="true" />Email</span>
                <small>{profile.email}</small>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span><Github size={19} aria-hidden="true" />GitHub</span>
                <small>@yi-san-spce</small>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
