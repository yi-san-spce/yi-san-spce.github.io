import { ArrowDown, ArrowUpRight, Github, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolio'

const orbitTags = ['AI Application', 'Vibe Coding', 'LLM', 'Product Building']

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-aurora hero-aurora--one" />
      <div className="hero-aurora hero-aurora--two" />
      <div className="hero-grid" />

      <div className="hero-shell">
        <div className="hero-status">
          <span className="status-dot" />
          AI Application Developer · Open to Internship
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-name">yisan <span>/ 王奕</span></div>
            <h1 id="hero-title">
              Building Ideas<br />
              <span>with AI.</span>
            </h1>
            <p className="hero-subtitle">AI Application Developer<br />Exploring LLM, AIGC and Future Software Creation</p>
            <p className="hero-cn">通过人工智能与代码，将想法快速转化为真实产品。</p>

            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                Explore Projects <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a className="button button--glass" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Yisan AI Lab disciplines">
            <div className="visual-orbit visual-orbit--outer" />
            <div className="visual-orbit visual-orbit--inner" />
            <div className="lab-core glass-panel">
              <div className="lab-core__glow" />
              <div className="lab-core__icon"><Sparkles size={28} strokeWidth={1.6} /></div>
              <small>PERSONAL AI LAB</small>
              <strong>Yisan</strong>
              <span>Explore · Build · Iterate</span>
              <div className="core-signal"><i /><i /><i /><i /></div>
            </div>
            {orbitTags.map((tag, index) => (
              <div key={tag} className={`orbit-tag orbit-tag--${index + 1}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>{tag}
              </div>
            ))}
            <div className="floating-gem floating-gem--one" />
            <div className="floating-gem floating-gem--two" />
          </div>
        </div>

        <div className="hero-footnote">
          <span>Scroll to explore</span>
          <span className="hero-footnote__line" />
          <span>Portfolio / 2026</span>
        </div>
      </div>
    </section>
  )
}
