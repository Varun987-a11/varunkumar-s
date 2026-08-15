import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    tags: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'],
    variant: '',
  },
  {
    label: 'Frontend',
    tags: ['HTML/CSS', 'React', 'Vite', 'Chart.js', 'Leaflet.js'],
    variant: '',
  },
  {
    label: 'Backend & DB',
    tags: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'Firebase', 'JWT'],
    variant: '',
  },
  {
    label: 'ML & Tools',
    tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Git', 'VS Code'],
    variant: 'purple',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id="s-skills" ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card">
        <div className="section-label">stack</div>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {SKILL_GROUPS.map(({ label, tags, variant }) => (
            <div className="skill-group" key={label}>
              <div className="skill-group-label">{label}</div>
              <div className="skill-tags">
                {tags.map(tag => (
                  <span key={tag} className={`skill-tag ${variant}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}