import TiltCard from './TiltCard.jsx'

const CONTACTS = [
  {
    href: 'mailto:varunkumarsaravu@gmail.com',
    label: 'email',
    detail: 'varunkumarsaravu@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    href: 'tel:+917977683702',
    label: 'phone',
    detail: '+91 79776 83702',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/varunkumar-s',
    external: true,
    label: 'linkedin',
    detail: '/in/varunkumar-s',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/Varun987-a11',
    external: true,
    label: 'github',
    detail: '/Varun987-a11',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/this.vks.in/',
    external: true,
    label: 'instagram',
    detail: '@this.vks.in',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <TiltCard className="card tilt-card">
      <div className="section-label">connect</div>
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-grid">
        {CONTACTS.map((c) => (
          <a
            href={c.href}
            key={c.label}
            className="contact-item"
            target={c.external ? '_blank' : undefined}
            rel={c.external ? 'noopener noreferrer' : undefined}
          >
            <div className="contact-icon">{c.icon}</div>

            <div style={{ overflow: 'hidden' }}>
              <div className="contact-label">{c.label}</div>
              <div className="contact-detail">{c.detail}</div>
            </div>
          </a>
        ))}
      </div>
    </TiltCard>
  )
}