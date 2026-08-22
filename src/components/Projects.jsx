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
            </div>
          </div>
        ))}
      </div>
    </TiltCard>
  )
}