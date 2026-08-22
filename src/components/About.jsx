import TiltCard from './TiltCard.jsx'

export default function About() {
  return (
    <TiltCard className="card tilt-card">
      <div className="section-label">about</div>
      <h2 className="section-title">Who I Am</h2>
      <p className="about-text">
        I am <strong>Varun Kumar S</strong>, a final-year <strong>Computer Science & Engineering</strong> student at{' '}
        <span className="em">AJ Institute of Engineering and Technology, Mangaluru</span> (CGPA: 7.88).
        <br /><br />
        I enjoy building reliable full-stack web platforms that solve real-world problems. Currently, I am shipping a{' '}
        <strong>custom jewellery rental platform</strong> for a boutique client while continually strengthening my core
        foundations in <span className="em">Data Structures & Algorithms</span>.
        <br /><br />
        My work spans production web apps, ML research systems, and progressive web apps like{' '}
        <span className="em">Swagriha</span>, which is actively used in daily household routines. I have an affinity for
        systems architecture, pragmatic design, and clean backend logic that makes complex user experiences feel seamless.
      </p>
    </TiltCard>
  )
}