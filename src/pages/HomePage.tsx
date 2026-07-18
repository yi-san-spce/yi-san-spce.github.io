import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Exploration } from '../components/Exploration'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Journey } from '../components/Journey'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Exploration />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
