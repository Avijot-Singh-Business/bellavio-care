import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Heart, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/for-participants', label: 'Participants' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Top utility bar */}
      <div style={{ backgroundColor: 'var(--navy-xdark)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        className="hidden lg:block">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>
            <span>NDIS Provider — Plan-Managed & Self-Managed Welcome</span>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="tel:0405066000" style={{ color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                <Phone size={11} /> 0405 066 000
              </a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <span>Officer, VIC 3809</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.35s ease',
          backgroundColor: scrolled ? 'rgba(9,15,28,0.97)' : 'rgba(9,15,28,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}
            aria-label="Main navigation">

            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
              aria-label="Bellavio Care home">
              <div style={{
                width: '2.4rem', height: '2.4rem', borderRadius: '0.6rem',
                background: 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(201,168,76,0.4)',
              }}>
                <Heart size={14} fill="white" color="white" />
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(0.9rem, 4vw, 1.05rem)', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
                  Bellavio Care
                </div>
                <div className="hidden lg:block" style={{ color: 'var(--gold)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.85, marginTop: '0.1rem' }}>
                  NDIS Provider · Melbourne & VIC
                </div>
              </div>
            </Link>

            {/* Desktop links */}
            <div style={{ alignItems: 'center', gap: '0.25rem' }} className="hidden lg:flex">
              {navLinks.map(({ to, label }) => (
                <NavLink key={to} to={to} end={to === '/'}
                  style={({ isActive }) => ({
                    padding: '0.5rem 0.85rem',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s',
                    position: 'relative',
                    letterSpacing: '0.01em',
                  })}
                  onMouseEnter={e => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Right CTA */}
            <div style={{ alignItems: 'center', gap: '0.75rem' }} className="hidden lg:flex">
              <a href="tel:0405066000" style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <Phone size={13} /> 0405 066 000
              </a>
              <Link to="/contact" className="btn btn-gold btn-sm" style={{ borderRadius: '0.55rem' }}>
                Get Started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(o => !o)}
              style={{ background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '0.5rem', padding: '0.5rem', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '44px', minWidth: '44px' }}
              className="lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99, backgroundColor: 'var(--navy)', overflowY: 'auto' }}
            className="lg:hidden"
          >
            <div style={{ padding: '6.5rem 1.5rem 3rem 1.5rem', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center', width: '100%', marginBottom: '2.5rem' }}>
                {navLinks.map(({ to, label }, i) => (
                  <motion.div key={to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}>
                    <NavLink to={to} end={to === '/'}
                      style={({ isActive }) => ({
                        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem 1rem', fontSize: '1.25rem', fontWeight: 700,
                        color: 'white', textDecoration: 'none', minHeight: '48px', width: '100%', textAlign: 'center',
                        letterSpacing: '-0.02em', fontFamily: "'Inter', sans-serif",
                        position: 'relative'
                      })}>
                      <span className={isActive ? 'underline-gold' : ''} style={{ position: 'relative' }}>
                        {label}
                        {/* Custom hover line for mobile links */}
                        <span style={{
                          position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px',
                          background: 'var(--gold)', transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'center', transition: 'transform 0.2s',
                        }} className="mobile-nav-underline" />
                      </span>
                      <style>{`.mobile-nav-underline { transition: transform 0.2s; } a:hover .mobile-nav-underline { transform: scaleX(1) !important; }`}</style>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '300px' }}>
                <Link to="/contact" className="btn btn-gold" onClick={() => setMobileOpen(false)}
                  style={{ textAlign: 'center', justifyContent: 'center', borderRadius: '0.75rem', width: '100%' }}>
                  Get Started
                </Link>
                <a href="tel:0405066000"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>
                  <Phone size={14} /> 0405 066 000
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
