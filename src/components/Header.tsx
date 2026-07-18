import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Lab', href: '#lab' },
  { label: 'Journey', href: '#journey' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Yisan AI Lab home">
          <span className="brand-mark">Y</span>
          <span className="brand-copy">
            <strong>Yisan AI Lab</strong>
            <small>Building Ideas with AI</small>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`}
        aria-hidden={!menuOpen}
        hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
            {item.label}<span>↗</span>
          </a>
        ))}
        <a href="#contact" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Let&apos;s connect<span>↗</span></a>
      </div>
    </header>
  )
}
