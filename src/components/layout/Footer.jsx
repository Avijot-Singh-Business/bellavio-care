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
              <a href="tel:0405066000" className="btn btn-outline-white btn-sm"
                style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                <Phone size={14} /> 0405 066 000
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', padding: '5rem 0 4rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 2 / span 2' }} className="lg-col-span-2">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
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
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '26rem', marginBottom: '1.5rem' }}>
              The Beautiful Path to Independent Living. Professional NDIS support services across Melbourne and Victoria, delivered with dignity, compassion and respect.
            </p>
            {/* Contact quick */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="tel:0405066000" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                <Phone size={13} style={{ color: 'var(--gold)' }} /> 0405 066 000
              </a>
              <a href="mailto:singhavijot17@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                <Mail size={13} style={{ color: 'var(--gold)' }} /> singhavijot17@gmail.com
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
                <MapPin size={13} style={{ color: 'var(--gold)' }} /> Officer, VIC 3809 · Serving all of Melbourne & Victoria
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Quick Links</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
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
          <div>
            <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Our Services</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
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
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', paddingBottom: '2.5rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
            © 2026 Bellavio Care Pty Ltd · All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
