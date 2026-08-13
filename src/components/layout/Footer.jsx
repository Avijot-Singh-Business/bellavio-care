import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/for-participants', label: 'For Participants' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'Daily Living Support',
  'Community Access',
  'Domestic Assistance',
  'Social Support',
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy-xdark)', color: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-8rem', right: '-8rem',
          width: '28rem', height: '28rem', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }} />
        <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      </div>

      {/* CTA strip */}
      <div style={{ background: 'linear-gradient(90deg, var(--navy-dark) 0%, var(--navy-light) 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', padding: '2rem 0' }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: '1.15rem', color: 'white', marginBottom: '0.2rem' }}>
                Ready to start your journey with Bellavio Care?
              </p>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                Free, no-obligation consultation — call us or send a message today.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="tel:0433381145" className="btn btn-outline-white btn-sm"
                style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                <Phone size={14} /> 0433 381 145
              </a>
              <Link to="/contact" className="btn btn-gold btn-sm">
                Get in Touch <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', padding: '5rem 0 4rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 2 / span 2' }} className="lg-col-span-2 footer-col">
            <Link to="/" className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <div style={{
                width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(201,168,76,0.35)',
              }}>
                <Heart size={16} fill="white" color="white" />
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>Bellavio Care</div>
                <div style={{ color: 'var(--gold)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>NDIS Provider</div>
              </div>
            </Link>
            <p className="footer-brand-text" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '26rem', marginBottom: '1.5rem' }}>
              Bellavio Care Pty Ltd is an NDIS provider serving self-managed and plan-managed participants across all of Australia. ABN 48 698 992 862
            </p>
            {/* Contact quick */}
            <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="tel:0433381145" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                <Phone size={13} style={{ color: 'var(--gold)' }} /> 0433 381 145
              </a>
              <a href="mailto:info@bellaviocare.com.au" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                <Mail size={13} style={{ color: 'var(--gold)' }} /> info@bellaviocare.com.au
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
                <MapPin size={13} style={{ color: 'var(--gold)' }} /> Serving All of Australia
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <p className="eyebrow footer-section-title" style={{ marginBottom: '1.25rem' }}>Quick Links</p>
            <ul className="footer-link-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s, paddingLeft 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.paddingLeft = '6px' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.paddingLeft = '0' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <p className="eyebrow footer-section-title" style={{ marginBottom: '1.25rem' }}>Our Services</p>
            <ul className="footer-link-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {serviceLinks.map(s => (
                <li key={s}>
                  <Link to="/services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s, paddingLeft 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.paddingLeft = '6px' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.paddingLeft = '0' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NDIS notice */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.25rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(201,168,76,0.05)', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.85, textAlign: 'center' }}>
            NDIS Unregistered Provider — Serving Plan-Managed &amp; Self-Managed Participants &middot; ABN: 48 698 992 862
          </p>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', width: '100%', justifyContent: 'center', marginBottom: '1rem' }} className="footer-links">
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                {l}
              </a>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', textAlign: 'center', width: '100%', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            Bellavio Care Pty Ltd (ABN 48 698 992 862) is an NDIS provider. We deliver supports to self-managed and plan-managed NDIS participants in accordance with the NDIS Code of Conduct. All workers hold current NDIS Worker Screening clearances and comply with relevant legislation.<br/>
            © 2026 Bellavio Care Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; padding: 40px 0 32px !important; text-align: center; }
          .footer-brand { justify-content: center !important; }
          .footer-brand-text { margin: 0 auto 1.5rem !important; }
          .footer-contact { align-items: center !important; }
          .footer-section-title { font-size: 14px !important; margin-bottom: 16px !important; }
          .footer-link-list { align-items: center !important; }
          .footer-link-list a { font-size: 14px !important; min-height: 32px !important; display: flex; align-items: center; justify-content: center; }
          .footer-bottom { flex-direction: column !important; gap: 1rem !important; }
        }
      `}</style>
    </footer>
  )
}
