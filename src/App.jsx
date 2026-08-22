import BackgroundFX from './components/BackgroundFX.jsx'
import NavDots from './components/NavDots.jsx'
import SectionBlock from './components/SectionBlock.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Achievements from './components/Achievements.jsx'
import Hobby from './components/Hobby.jsx'
import Contact from './components/Contact.jsx'
import StatusFooter from './components/StatusFooter.jsx'

export default function App() {
  return (
    <>
      <BackgroundFX />

      <header>
        <img
          src="/logo.png"
          alt="VKS Logo"
          className="sticky-logo"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <img
          src="/profile.png"
          alt="Varun Kumar S"
          className="nav-profile"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </header>

      <NavDots />

      <main className="main-wrapper">
        <SectionBlock id="s-hero"><Hero /></SectionBlock>
        <SectionBlock id="s-about"><About /></SectionBlock>
        <SectionBlock id="s-skills"><Skills /></SectionBlock>
        <SectionBlock id="s-projects"><Projects /></SectionBlock>
        <SectionBlock id="s-exp"><Experience /></SectionBlock>
        <SectionBlock id="s-achieve"><Achievements /></SectionBlock>
        <SectionBlock id="s-hobby"><Hobby /></SectionBlock>
        <SectionBlock id="s-contact"><Contact /></SectionBlock>
        <div className="section-block visible"><StatusFooter /></div>
      </main>
    </>
  )
}