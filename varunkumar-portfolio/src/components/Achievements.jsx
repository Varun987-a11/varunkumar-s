import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ITEMS = [
  {
    icon: '🏆',
    text: <><strong>1st Place — Institutional Startup Competition</strong>, AJIET (Team Vayorca). Competed in the college-level innovation challenge and won.</>,
  },
  {
    icon: '🎤',
    text: <><strong>Selected for Final Interview</strong> — BOLPU Regional Startup Initiative, Mangaluru. Presented solution before industry experts and demonstrated prototype.</>,
  },
  {
    icon: '⚓',
    text: <><strong>Arduino-based deep-sea prototype</strong> — loss-detection system for fishing net operations. Presented at College of Engineering, Phaltan.</>,
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id="s-achieve" ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card">
        <div className="section-label">recognition</div>
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-list">
          {ITEMS.map((item, i) => (
            <motion.div
              className="achievement-item" key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-text">{item.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}