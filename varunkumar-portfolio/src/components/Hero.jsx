import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const PHRASES = [
  'Full Stack Developer',
  'Computer Science Engineer',
  'Web Systems Builder',
  'ML Explorer',
]

function useTypewriter(phrases) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(phrase.substring(0, charIdx + 1))
        if (charIdx + 1 === phrase.length) {
          setTimeout(() => setDeleting(true), 2200)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setText(phrase.substring(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setPhraseIdx(i => (i + 1) % phrases.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? 35 : 70)

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx, phrases])

  return text
}

export default function Hero() {
  const typed = useTypewriter(PHRASES)

  return (
    <motion.section
      id="s-hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card hero-card">
        <div className="hero-eyebrow">cs engineer · mangaluru</div>

        <h1 className="hero-name">Varun Kumar S</h1>

        <div className="typing-row">
          <span>{typed}</span>
          <span className="typing-cursor" />
        </div>

        <p className="hero-desc">
          "Refactoring the future, one commit at a time."
        </p>

        <div className="btn-row">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Resume
          </a>

          <a
            href="https://linkedin.com/in/varunkumar-s"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/Varun987-a11"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  )
}