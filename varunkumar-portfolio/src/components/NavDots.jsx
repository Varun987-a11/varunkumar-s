import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 's-hero',    label: 'Home'       },
  { id: 's-about',   label: 'About'      },
  { id: 's-skills',  label: 'Skills'     },
  { id: 's-projects',label: 'Projects'   },
  { id: 's-exp',     label: 'Experience' },
  { id: 's-achieve', label: 'Awards'     },
  { id: 's-contact', label: 'Contact'    },
]

export default function NavDots() {
  const [active, setActive] = useState('s-hero')

  useEffect(() => {
    const observers = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      io.observe(el)
      observers.push(io)
    })
    return () => observers.forEach(io => io.disconnect())
  }, [])

  return (
    <div className="nav-dots">
      {SECTIONS.map(({ id, label }) => (
        <div
          key={id}
          className={`nav-dot ${active === id ? 'active' : ''}`}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="dot-label">{label}</span>
        </div>
      ))}
    </div>
  )
}