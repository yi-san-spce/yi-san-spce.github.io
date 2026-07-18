import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">Y</span>
          <div><strong>Yisan AI Lab</strong><small>Building Ideas with AI</small></div>
        </div>
        <p>Designed &amp; built by {profile.name} / {profile.chineseName}<br />with curiosity, code and AI.</p>
        <a href="#top" aria-label="Back to top">Back to top <ArrowUp size={16} /></a>
      </div>
    </footer>
  )
}
