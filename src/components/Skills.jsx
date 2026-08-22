import TiltCard from './TiltCard.jsx'

const GROUPS = [
  { label: 'Languages', tags: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'] },
  { label: 'Frontend', tags: ['HTML/CSS', 'React', 'Vite', 'Chart.js', 'Leaflet.js'] },
  { label: 'Backend & DB', tags: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'Firebase', 'JWT'] },
  { label: 'ML & Tools', tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Git', 'VS Code'], purple: true },
]

export default function Skills() {
  return (
    <TiltCard className="card tilt-card">
      <div className="section-label">stack</div>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {GROUPS.map((g) => (
          <div className="skill-group" key={g.label}>
            <div className="skill-group-label">{g.label}</div>
            <div className="skill-tags">
              {g.tags.map((t) => (
                <span className={`skill-tag${g.purple ? ' purple' : ''}`} key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TiltCard>
  )
}