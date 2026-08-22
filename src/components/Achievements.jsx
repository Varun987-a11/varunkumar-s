import TiltCard from './TiltCard.jsx'

export default function Achievements() {
  return (
    <TiltCard className="card tilt-card">
      <div className="section-label">recognition</div>
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-list">
        <div className="achievement-item">
          <div className="achievement-icon">🏆</div>
          <div className="achievement-text">
            <strong>1st Place: Institutional Startup Competition</strong>, AJIET (Team Vayorca). Recognized for
            product innovation and technical prototype execution.
          </div>
        </div>
        <div className="achievement-item">
          <div className="achievement-icon">💡</div>
          <div className="achievement-text">
            <strong>Finalist: BOLPU Regional Startup Initiative</strong>, Mangaluru. Pitched architectural design
            and working prototype before an industry evaluation jury.
          </div>
        </div>
      </div>
    </TiltCard>
  )
}