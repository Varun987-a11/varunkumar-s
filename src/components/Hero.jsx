import { useEffect, useState } from 'react'
import TiltCard from './TiltCard.jsx'

const PHRASES = [
  'Full Stack Developer',
  'Computer Science Engineer',
  'Web Systems Builder',
  'ML Explorer'
]

export default function Hero() {
  const [text, setText] = useState('')

  useEffect(() => {
    let i = 0
    let j = 0
    let deleting = false
    let timeoutId

    function tick() {
      const phrase = PHRASES[i]
      setText(phrase.substring(0, j))

      if (!deleting && j === phrase.length) {
        timeoutId = setTimeout(() => {
          deleting = true
          tick()
        }, 2000)
        return
      }

      if (deleting && j === 0) {
        deleting = false
        i = (i + 1) % PHRASES.length
      }

      j += deleting ? -1 : 1
      timeoutId = setTimeout(tick, deleting ? 30 : 60)
    }

    tick()

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <TiltCard className="card hero-card tilt-card">
      <h1 className="hero-name">Varun Kumar S</h1>

      <div className="typing-row">
        <span>{text}</span>
        <span className="typing-cursor" />
      </div>

      <p className="hero-desc">
        "Refactoring the future, one clean commit at a time."
      </p>

      <div className="btn-row">
        <a
          href="https://raw.githubusercontent.com/Varun987-a11/varunkumar-s/main/Varun_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          View Resume
        </a>

        <a href="#s-contact" className="btn btn-secondary">
          Get in Touch
        </a>
      </div>
    </TiltCard>
  )
}