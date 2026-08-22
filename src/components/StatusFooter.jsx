import { useEffect, useState } from 'react'

const MESSAGES = ['SYSTEM STATUS: OPTIMAL', 'INITIALIZING PORTFOLIO...', 'DEPLOYING MODULES...', 'BUILDING IDEAS...']

export default function StatusFooter() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      const t = setTimeout(() => {
        setIdx((prev) => (prev + 1) % MESSAGES.length)
        setVisible(true)
      }, 350)
      return () => clearTimeout(t)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="status-footer">
      <div className="status-line">
        <div className="status-dot-anim" />
        <span style={{ opacity: visible ? 1 : 0 }}>{MESSAGES[idx]}</span>
      </div>
    </footer>
  )
}