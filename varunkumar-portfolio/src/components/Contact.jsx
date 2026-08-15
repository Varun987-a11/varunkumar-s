import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const LINKS = [
  { icon: '✉️', meta: 'email',    label: 'varunkumarsaravu@gmail.com', href: 'mailto:varunkumarsaravu@gmail.com' },
  { icon: '📱', meta: 'phone',    label: '+91 79776 83702',              href: 'tel:+917977683702'                },
  { icon: '💼', meta: 'linkedin', label: '/in/varunkumar-s',             href: 'https://linkedin.com/in/varunkumar-s' },
  { icon: '🐙', meta: 'github',   label: '/Varun987-a11',                href: 'https://github.com/Varun987-a11' },
]

const STATUS_MSGS = [
  'SYSTEM STATUS: BUILDING...',
  'INITIALIZING PORTFOLIO...',
  'DEPLOYING FEATURES...',
  'CODING IN PROGRESS...',
  'PUSHING TO MAIN...',
]

import { useState, useEffect } from 'react'

function StatusFooter() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % STATUS_MSGS.length)
        setVisible(true)
      }, 300)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="status-footer">
      <div className="status-line">
        <div className="status-dot-anim" />
        <span style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s', minWidth: '240px' }}>
          {STATUS_MSGS[idx]}
        </span>
      </div>
      <div className="status-sub">A comprehensive portfolio experience is actively under development.</div>
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id="s-contact" ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card">
        <div className="section-label">connect</div>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          {LINKS.map(({ icon, meta, label, href }) => (
            <a key={meta} href={href} target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon">{icon}</div>
              <div>
                <div className="contact-meta">{meta}</div>
                {label}
              </div>
            </a>
          ))}
        </div>
      </div>
      <StatusFooter />
    </motion.section>
  )
}