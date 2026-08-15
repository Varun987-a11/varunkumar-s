import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    emoji: '🏠',
    status: 'live',
    statusText: 'Live in Production',
    name: 'Swagriha — Family Productivity Platform',
    desc: 'A Progressive Web App built with React, Vite, Firebase & Firestore. Shared grocery management, expense tracking, task calendars, monthly reports. In daily use by a real household.',
    tags: ['React', 'Vite', 'Firebase', 'PWA', 'Firestore'],
    featured: true,
    cover: null,
  },
  {
    emoji: '🔊',
    status: 'active',
    statusText: 'Completed',
    name: 'NoiseScope',
    desc: 'Crowdsourced noise mapping. Web Audio API for dB capture, Leaflet.js for geo-viz, Chart.js for trends. Full-stack with MySQL.',
    tags: ['Node.js', 'MySQL', 'Leaflet.js', 'Web Audio API'],
    cover: null,
  },
  {
    emoji: '💎',
    status: 'ongoing',
    statusText: 'Ongoing Client',
    name: 'Jewellery Rental Platform',
    desc: 'Custom web solution for a jewellery rental business — inventory, booking, payment integration, and admin dashboard.',
    tags: ['Full-Stack', 'Booking', 'Admin CMS'],
    cover: null,
  },
  {
    emoji: '🌱',
    status: 'ongoing',
    statusText: 'Research · Ongoing',
    name: 'Crop Disease Detection',
    desc: 'Ensemble ML/DL comparing MobileNetV2, ResNet50, DenseNet121, ViT & SVM on PlantVillage. Transfer learning + F1-score benchmarking.',
    tags: ['PyTorch', 'TensorFlow', 'ViT', 'OpenCV'],
    cover: null,
  },
  {
    emoji: '🏥',
    status: 'active',
    statusText: 'Completed',
    name: 'MedixFlow',
    desc: 'Clinic appointment system with JWT auth, role-based access, time-slot validation, and admin dashboard. PHP + MySQL.',
    tags: ['PHP', 'MySQL', 'JWT', 'bcrypt'],
    cover: null,
  },
  {
    emoji: '🚨',
    status: 'active',
    statusText: 'Completed',
    name: 'DisasterLink',
    desc: 'Emergency resource locator. Submit reports with geo-location, admin pipeline (Pending → In Progress → Resolved), shelter locator.',
    tags: ['Node.js', 'MySQL', 'Geolocation', 'Dashboard'],
    cover: null,
  },
]

function StatusBadge({ status, text }) {
  return (
    <div className={`project-status status-${status}`}>
      <span className="status-dot" />
      {text}
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {project.cover
        ? <img src={project.cover} alt={project.name} className="project-cover" />
        : (
          <div className="project-cover-placeholder">
            {project.emoji}
          </div>
        )
      }
      <div className="project-body">
        <div className={project.featured ? 'project-main' : ''}>
          {project.featured && <span className="featured-badge">★ Featured</span>}
          <StatusBadge status={project.status} text={project.statusText} />
          <div className="project-name">{project.name}</div>
          <div className="project-desc">{project.desc}</div>
          <div className="project-tags">
            {project.tags.map(t => (
              <span key={t} className="project-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)

  return (
    <section id="s-projects" ref={ref}>
      <div className="card">
        <div className="section-label">work</div>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '16px', fontFamily: "'JetBrains Mono',monospace", textAlign: 'center' }}>
          ↑ Set cover: pass an image path to the `cover` prop in Projects.jsx
        </p>
      </div>
    </section>
  )
}