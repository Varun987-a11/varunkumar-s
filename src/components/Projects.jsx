import TiltCard from './TiltCard.jsx'

const PROJECTS = [
  {
    featured: true,
    cover: '/swagrihacover.png',
    alt: 'Swagriha platform preview',
    status: 'status-live',
    statusLabel: 'Live in Production',
    name: 'Swagriha: Connected Family Platform',
    desc: 'A Progressive Web App created with React, Vite, and Firebase. Features shared pantry lists, split expense accounting, family announcements, shared task calendars, and automated monthly summaries. Actively deployed and used by a real household.',
    tags: ['React', 'Vite', 'Firebase', 'PWA'],
    github: 'https://github.com/Varun987-a11/family-app', 
  },
  {
    icon: '🌱',
    status: 'status-ongoing',
    statusLabel: 'Research Study',
    name: 'Crop Disease Detection System',
    desc: 'An ensemble machine learning pipeline evaluating MobileNetV2, ResNet50, DenseNet121, Vision Transformers (ViT), and SVM models across PlantVillage datasets.',
    tags: ['PyTorch', 'ViT', 'OpenCV'],
  },
  {
    cover: '/noisescopecover.png',
    alt: 'NoiseScope project preview',
    status: 'status-active',
    statusLabel: 'Completed MVP',
    name: 'NoiseScope: Acoustic Urban Mapping',
    desc: 'A crowdsourced environmental noise mapping platform. Uses the Web Audio API for decibel measurement, Leaflet.js for geospatial mapping, and Chart.js for time-series analytics.',
    tags: ['Node.js', 'Leaflet.js', 'Web Audio API'],
    github: 'https://github.com/Varun987-a11/NoiseScope',
  },
  {
    cover: '/vivahamcover.png',
    alt: 'Jewellery platform preview',
    status: 'status-ongoing',
    statusLabel: 'Client Build',
    name: 'Jewellery Rental Platform',
    desc: 'A custom commercial platform built for a boutique jewellery rental business. Includes real-time inventory calendars, custom booking workflows, and administrative dashboards.',
    tags: ['Full-Stack', 'Booking', 'Admin CMS'],
  },
  {
    cover: '/medixflowcover.png',
    alt: 'MedixFlow preview',
    status: 'status-active',
    statusLabel: 'Completed MVP',
    name: 'MedixFlow: Clinic Portal',
    desc: 'A healthcare scheduling portal featuring JWT authentication, role-based access control, time-slot collision validation, and full clinic administrative workflows.',
    tags: ['PHP', 'MySQL', 'JWT'],
  },
  {
    cover: '/cosmiccanvas-cover.png',
    alt: 'Cosmic preview',
    status: 'status-live',
    statusLabel: 'Live',
    name: 'Cosmic Canvas',
    desc: 'A single-page infographic exploring the nature of reality from scientific and philosophical perspectives.',
    tags: ['HTML', 'CSS', 'UI/UX'],
    github: 'https://github.com/Varun987-a11/Cosmic-Canvas',
    demo: 'https://varun987-a11.github.io/Cosmic-Canvas/'
  },
  {
    cover: '/vedicwisdom-cover.png',
    alt: 'VedicWisdom preview',
    status: 'status-live',
    statusLabel: 'Live',
    name: 'Vedic Wisdom',
    desc: 'A simple static HTML site presenting insights into Vedic topics such as creation verses, history, and philosophy.',
    tags: ['HTML', 'CSS', 'Static Site'],
    github: 'https://github.com/Varun987-a11/Vedic-Wisdom',
    demo: 'https://varun987-a11.github.io/Vedic-Wisdom/'
  }
]

export default function Projects() {
  return (
    <TiltCard className="card tilt-card">
      <div className="section-label">work</div>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className={`project-card${p.featured ? ' featured' : ''} tilt-card`} key={p.name}>
            <div className={`project-cover${p.icon ? ' crop-placeholder' : ''}`}>
              {p.icon ? (
                <div className="crop-icon">{p.icon}</div>
              ) : (
                <img
                  src={p.cover}
                  alt={p.alt}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              )}
            </div>
            <div className="project-body">
              <div className={`project-status ${p.status}`}>
                <span className="status-dot" /> {p.statusLabel}
              </div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map((t) => <span className="project-tag" key={t}>{t}</span>)}
              </div>
              
              {/* Button Container for Layout */}
              <div className="project-links-row">
                {p.github && (
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn"
                  >
                    <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    Source Code
                  </a>
                )}
                
                {p.demo && (
                  <a 
                    href={p.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn"
                  >
                    <svg height="18" width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TiltCard>
  )
}