import { useEffect, useRef, useState } from 'react'
import BgCanvas   from './components/BgCanvas'
import NavDots    from './components/NavDots'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact    from './components/Contact'

export default function App() {
  const [scrollPct, setScrollPct]     = useState(0)
  const [showHint, setShowHint]       = useState(true)
  const [cursorPos, setCursorPos]     = useState({ x: -999, y: -999 })

  // Scroll progress + hint hide
  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100
      setScrollPct(pct)
      if (window.scrollY > 80) setShowHint(false)
      else setShowHint(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cursor glow
  useEffect(() => {
    const onMove = e => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div id="progress-bar" style={{ width: `${scrollPct}%` }} />

      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Animated grid + particles */}
      <BgCanvas />

      {/* Sticky floating elements (retained from original) */}
      <img src="/logo.png"    alt="VKS"           className="sticky-logo"  />
      <img src="/profile.png" alt="Varun Kumar S" className="nav-profile"  />

      {/* Section nav dots */}
      <NavDots />

      {/* Scroll hint */}
      <div className={`scroll-hint ${showHint ? '' : 'hidden'}`}>
        <span className="scroll-hint-text">scroll</span>
        <div className="scroll-arrow" />
      </div>

      {/* All sections */}
      <div className="main-wrapper">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </div>
    </>
  )
}