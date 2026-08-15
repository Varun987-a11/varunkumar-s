import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ITEMS = [
  {
    icon: '💼',
    period: '2025 → Present',
    title: 'Freelance Web Developer',
    sub: 'Client Project — Jewellery Rental Business',
    points: [
      'Designing and building a full-stack booking platform with payment integration',
      'End-to-end architecture: frontend, backend, database, and admin management',
      'Implementing secure JWT authentication and efficient data handling',
    ],
  },
  {
    icon: '🎓',
    period: '2022 → 2026',
    title: 'B.E. Computer Science & Engineering',
    sub: 'AJ Institute of Engineering & Technology, Mangaluru · CGPA: 7.92/10',
    points: [
      'Core: DSA, Computer Networks, OS, DBMS, OOP, AI, Software Engineering',
      'Active participant in startup and innovation programmes',
    ],
  },
  {
    icon: '📜',
    period: 'Certification',
    title: 'Java Developer Certification',
    sub: 'Infosys Springboard — TechA Programme',
    points: [],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id="s-exp" ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card">
        <div className="section-label">journey</div>
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          {ITEMS.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot">{item.icon}</div>
              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-sub">{item.sub}</div>
                {item.points.length > 0 && (
                  <ul className="timeline-points">
                    {item.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}