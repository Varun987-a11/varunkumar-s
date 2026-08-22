import TiltCard from './TiltCard.jsx'

export default function About() {
  return (
    <TiltCard className="card tilt-card">
      <div className="section-label">about</div>
      <h2 className="section-title">Who I Am</h2>
      <p className="about-text">
        Hi, I'm <strong>Varun Kumar S</strong>, a final-year <strong>Computer Science & Engineering</strong> student at{' '}
        <span className="em">AJ Institute of Engineering and Technology, Mangaluru</span> (CGPA: 7.88).
        <br /><br />
        I really enjoy building reliable, full-stack web platforms that solve practical, everyday problems. My current focus is on designing clean, user-centric systems while continually strengthening my core foundations in <span className="em">Data Structures & Algorithms</span>.
        <br /><br />
        I have a strong appreciation for thoughtful systems architecture, pragmatic design, and writing clean backend logic that makes complex user experiences feel intuitive. Ultimately, my goal is to build software that is both robust and genuinely helpful—an approach I focused on while developing <span className="em">Swagriha</span>, a progressive web app designed to streamline daily household routines.
      </p>
    </TiltCard>
  )
}