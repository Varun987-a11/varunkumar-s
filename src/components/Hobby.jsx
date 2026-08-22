import TiltCard from './TiltCard.jsx'

export default function Hobby() {
  return (
    <TiltCard className="card hobby-card tilt-card">
      <div className="section-label">off the grid</div>
      <div className="hobby-badge">Niche Pursuit</div>
      <h2 className="section-title">Railfanning & Trainspotting</h2>
      <div className="hobby-content">
        <p className="about-text">
          Beyond coding, I am an avid <strong>railfan</strong>. It is a relatively rare and unconventional hobby
          focused on the study, documentation, and observation of railway networks, locomotive power, signaling,
          and logistical scale.
          <br /><br />
          To document journeys, track loco movements, and share the beauty of rail transport, I run dedicated
          content channels:
        </p>
        <div className="hobby-links">
          <a href="https://www.youtube.com/@the-railbuzz" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            YouTube: @the-railbuzz
          </a>
          <a href="https://www.instagram.com/therailbuzz/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram: @therailbuzz
          </a>
        </div>
      </div>
    </TiltCard>
  )
}