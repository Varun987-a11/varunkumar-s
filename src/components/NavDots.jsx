import { useEffect, useState } from 'react'

const DOTS = [
  { id: 's-hero', label: 'Home' },
  { id: 's-about', label: 'About' },
  { id: 's-skills', label: 'Skills' },
  { id: 's-projects', label: 'Projects' },
  { id: 's-exp', label: 'Journey' },
  { id: 's-hobby', label: 'Hobby' },
  { id: 's-achieve', label: 'Awards' },
  { id: 's-contact', label: 'Contact' },
]

export default function NavDots() {
  const [active, setActive] = useState('s-hero')

  useEffect(() => {
    const sections = DOTS.map((d) => document.getElementById(d.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.25 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  function goTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="nav-dots" aria-label="Section navigation">
      {DOTS.map((d) => (
        <div
          key={d.id}
          className={`nav-dot${active === d.id ? ' active' : ''}`}
          onClick={() => goTo(d.id)}
          role="button"
          tabIndex={0}
          aria-label={d.label}
        >
          <span className="dot-label">{d.label}</span>
        </div>
      ))}
    </nav>
  )
}