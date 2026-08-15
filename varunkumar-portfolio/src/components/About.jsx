import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id="s-about" ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card">
        <div className="section-label">about</div>
        <h2 className="section-title">Who I Am</h2>
        <p className="about-text">
          I'm <strong>Varun Kumar S</strong>, a final-year{' '}
          <strong>Computer Science & Engineering</strong> student at{' '}
          <span className="about-em">AJ Institute of Engineering and Technology, Mangaluru</span>{' '}
          (CGPA: 7.92/10).
          <br /><br />
          I build full-stack web platforms that solve real problems — currently shipping a{' '}
          <strong>custom jewellery rental platform</strong> for a boutique client and deepening
          my foundations in <span className="about-em">Data Structures & Algorithms</span>.
          <br /><br />
          My work spans production-grade web apps, ML-based research systems, and a Progressive
          Web App (<span className="about-em">Swagriha</span>) that's live and in daily use by a
          real household. I like systems thinking, clean architecture, and backend logic that makes
          the frontend feel effortless.
        </p>
      </div>
    </motion.section>
  )
}