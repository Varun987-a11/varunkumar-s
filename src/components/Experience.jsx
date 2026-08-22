import TiltCard from './TiltCard.jsx'

const TIMELINE = [
  {
    icon: '💼',
    period: '2025 → Present',
    title: 'Freelance Web Developer',
    sub: 'Client Project (Jewellery Rental Business)',
    points: [
      'Designing and delivering a full-stack booking system with integrated payment flows',
      'Architecting end-to-end solutions spanning frontend interface, backend APIs, and database structures',
    ],
  },
  {
    icon: '🎓',
    period: '2023 → 2027',
    title: 'B.E. in Computer Science & Engineering',
    sub: 'AJ Institute of Engineering & Technology, Mangaluru (CGPA: 7.92/10)',
    points: [
      'Key coursework: DSA, Computer Networks, Operating Systems, DBMS, OOP, AI, Software Engineering',
      'Actively involved in regional tech exhibitions, hackathons, and incubation initiatives',
    ],
  },
  {
    icon: '📜',
    period: 'Certification',
    title: 'Java Developer Certification',
    sub: 'Infosys Springboard (TechA)',
    points: [],
  },
]

export default function Experience() {
  return (
    <TiltCard className="card tilt-card">
      <div className="section-label">journey</div>
      <h2 className="section-title">Experience & Education</h2>
      <div className="timeline">
        {TIMELINE.map((item) => (
          <div className="timeline-item" key={item.title}>
            <div className="timeline-dot">{item.icon}</div>
            <div className="timeline-content">
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-sub">{item.sub}</div>
              {item.points.length > 0 && (
                <ul className="timeline-points">
                  {item.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </TiltCard>
  )
}