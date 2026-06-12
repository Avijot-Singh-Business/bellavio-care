import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ShieldCheck, BadgeCheck, UserCheck, MapPin,
  Home as HomeIcon, Car, Utensils, Heart, Star, Quote,
  CheckCircle, ChevronDown, Award, Users, Sparkles, Phone,
} from 'lucide-react'

/* ─ animation helper ─ */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ─ data ─ */
const trustItems = [
  { icon: ShieldCheck, label: 'Plan-Managed & Self-Managed Welcome' },
  { icon: BadgeCheck,  label: 'Fully Insured' },
  { icon: UserCheck,   label: 'Police Checked Workers' },
  { icon: MapPin,      label: 'Serving All of Victoria' },
]

const services = [
  {
    icon: HomeIcon,
    title: 'Daily Living Support',
    desc: 'Personal care, cooking, cleaning and daily household tasks — supporting independence at home with dignity.',
    color: '#1a4a3a',
    bg: '#f0faf5',
  },
  {
    icon: Car,
    title: 'Community Access',
    desc: 'Transport, appointments, events and social activities — connecting participants with their community.',
    color: '#2a3a5a',
    bg: '#f0f4fa',
  },
  {
    icon: Utensils,
    title: 'Domestic Assistance',
    desc: 'Meal prep, grocery shopping, laundry and home organisation — a clean home, a clearer mind.',
    color: '#4a2a1a',
    bg: '#faf5f0',
  },
  {
    icon: Heart,
    title: 'Social Support',
    desc: 'Genuine companionship, activities and connection — because wellbeing is more than physical care.',
    color: '#4a1a2a',
    bg: '#faf0f3',
  },
]

const whyUs = [
  {
    icon: MapPin,
    title: 'Local & Reliable',
    body: 'Based in Melbourne, we deliver supports across Victoria. We come to you — wherever you are in the state.',
  },
  {
    icon: Award,
    title: 'Experienced Workers',
    body: 'Carefully selected, trained, police checked and fully insured. You always know who is coming and what to expect.',
  },
  {
    icon: Sparkles,
    title: 'Participant-First',
    body: 'Every plan is built around you — your goals, your schedule, your preferences. We adapt to you, always.',
  },
]

const testimonials = [
  {
    name: 'Margaret T.',
    location: 'Berwick, VIC',
    text: 'Bellavio Care has truly changed my life. My support worker is punctual, caring and always goes above and beyond. I finally feel the independence I deserve.',
    initials: 'MT',
  },
  {
    name: 'David K.',
    location: 'Pakenham, VIC',
    text: 'From the very first call, the team made us feel welcome and understood. My son loves his community access sessions — it has made such a difference.',
    initials: 'DK',
  },
  {
    name: 'Sandra L.',
    location: 'Officer, VIC',
    text: 'Professional, warm and incredibly responsive. Bellavio Care is everything I hoped for in a support provider. I recommend them to everyone.',
    initials: 'SL',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Bellavio Care — NDIS Support Provider Melbourne &amp; Victoria</title>
        <meta name="description" content="Professional NDIS daily living and community access support across Melbourne and Victoria. Plan-managed and self-managed participants welcome." />
      </Helmet>

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(160deg, var(--navy-xdark) 0%, #162440 45%, var(--navy-light) 100%)',
        overflow: 'hidden',
      }} aria-label="Hero section">

        {/* Background layers */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {/* Grid */}
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0 }} />
          {/* Gold glow top right */}
          <div style={{
            position: 'absolute', top: '-15%', right: '-10%',
            width: '55rem', height: '55rem', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)',
          }} />
          {/* Soft orb bottom left */}
          <div style={{
            position: 'absolute', bottom: '-20%', left: '-15%',
            width: '45rem', height: '45rem', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(36,57,96,0.8) 0%, transparent 70%)',
          }} />
          {/* Accent line */}
          <div style={{
            position: 'absolute', top: 0, left: '50%',
            width: '1px', height: '100%',
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.12), transparent)',
          }} />
        </div>

        {/* Floating visual — right side desktop */}
        <div aria-hidden="true" style={{ position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)', width: '42%', maxWidth: '560px', display: 'none' }} className="xl:block">
          <div style={{
            position: 'relative',
            aspectRatio: '4/5',
            borderRadius: '2rem',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(36,57,96,0.9) 0%, rgba(27,43,75,0.7) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
          }}>
            <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '3rem',
            }}>
              <div style={{
                width: '6rem', height: '6rem', borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.08) 100%)',
                border: '2px solid rgba(201,168,76,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Heart size={30} style={{ color: 'var(--gold)' }} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Care · Dignity · Respect
              </p>
            </div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
              background: 'rgba(9,15,28,0.85)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(201,168,76,0.25)', borderRadius: '0.875rem',
              padding: '0.75rem 1.25rem', whiteSpace: 'nowrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '0.6rem', height: '0.6rem', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
                <span style={{ color: 'white', fontSize: '0.78rem', fontWeight: 600 }}>Now accepting new participants</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '8rem', paddingBottom: '6rem' }}>
          <div style={{ maxWidth: '640px' }}>

            {/* Eyebrow tag */}
            <motion.div {...fadeUp(0)}>
              <span className="tag" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                <MapPin size={11} /> Officer, VIC · NDIS Provider — Plan-managed & Self-managed Welcome
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.08)} className="hero-title"
              style={{ fontWeight: 800, color: 'white', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
              The Beautiful<br className="mobile-only" />{' '}
              <span className="gradient-text">Path</span>
              <br />to Independent
              <br />Living
            </motion.h1>

            {/* Subheading */}
            <motion.p {...fadeUp(0.15)} className="hero-subtitle"
              style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '500px', marginBottom: '2.5rem' }}>
              Professional NDIS support services across Melbourne and Victoria, delivered with care, dignity and respect.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.22)} className="hero-buttons" style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">
                Get Started Free <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-outline-white btn-lg">
                Learn More
              </Link>
            </motion.div>

            {/* Social proof strip */}
            <motion.div {...fadeUp(0.3)}
              style={{
                display: 'flex', gap: '2rem', flexWrap: 'wrap',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}>
              {[
                { value: '100%', label: 'Participant Focused' },
                { value: '4', label: 'NDIS Services' },
                { value: 'Vic', label: 'Wide Coverage' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem', fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
          aria-hidden="true">
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
            <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.25)' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════ */}
      <section style={{ background: 'var(--navy-dark)', borderBottom: '1px solid rgba(255,255,255,0.06)' }} aria-label="Trust signals">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="grid-trust">
            {trustItems.map(({ icon: Icon, label }, i) => (
              <motion.div key={label} {...fadeUp(i * 0.07)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '1.5rem 1.25rem',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                <div className="icon-box" style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)', flexShrink: 0 }}>
                  <Icon size={18} style={{ color: 'var(--gold)' }} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', fontWeight: 600 }}>{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          .hero-title { font-size: clamp(2.8rem, 6vw, 5rem); }
          .hero-subtitle { font-size: 1.1rem; line-height: 1.75; }
          .mobile-only { display: none; }
          @media (max-width: 768px) {
            .grid-trust { grid-template-columns: repeat(2, 1fr) !important; }
            .grid-trust > div:nth-child(2) { border-right: none !important; }
            .grid-trust > div:nth-child(1),
            .grid-trust > div:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.06); }
            .grid-trust > div { padding: 12px !important; flex-direction: column; justify-content: center; text-align: center; gap: 0.5rem !important; }
            .grid-trust span { font-size: 12px !important; }
            .hero-title { font-size: 48px !important; }
            .hero-subtitle { font-size: 16px !important; line-height: 1.6 !important; }
            .hero-buttons { flex-direction: column !important; gap: 12px !important; }
            .hero-buttons > * { width: 100% !important; justify-content: center; }
            .tag { font-size: 10px !important; padding: 0.3rem 0.6rem !important; white-space: normal !important; text-align: center; }
            .mobile-only { display: block; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════
          SERVICES GRID
      ═══════════════════════════════════ */}
      <section className="section-lg" style={{ background: 'var(--cream)' }} id="services" aria-label="Our services">
        <div className="container">
          {/* Header */}
          <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 4rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>What We Offer</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
              Support Services Tailored to You
            </h2>
            <div className="divider-gold centered" />
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginTop: '1rem' }}>
              We provide NDIS-funded supports designed to help you live life on your own terms — at home and in your community.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="services-grid">
            {services.map((svc, i) => (
              <motion.div key={svc.title} {...fadeUp(i * 0.09)}
                className="card"
                style={{ padding: '2.25rem 2rem', cursor: 'default', position: 'relative', overflow: 'hidden' }}>
                {/* Top accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                  opacity: 0, transition: 'opacity 0.3s',
                }} className="card-accent" />

                <div className="svc-icon-wrap" style={{
                  background: svc.bg, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '1.5rem', borderRadius: '0.875rem'
                }}>
                  <svc.icon className="svc-icon" style={{ color: svc.color }} />
                </div>

                <h3 className="svc-title" style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.625rem' }}>{svc.title}</h3>
                <p className="svc-desc" style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>{svc.desc}</p>

                <Link to="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                  fontSize: '0.82rem', fontWeight: 700, color: 'var(--gold)',
                  textDecoration: 'none', letterSpacing: '0.01em',
                  transition: 'gap 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.gap = '0.6rem' }}
                  onMouseLeave={e => { e.currentTarget.style.gap = '0.3rem' }}
                  aria-label={`Learn more about ${svc.title}`}>
                  Learn More <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div {...fadeUp(0.3)} style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-outline-navy btn-lg">
              View All Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════ */}
      <section className="section-lg" style={{ background: 'white' }} aria-label="Why choose us">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="why-grid">
            {/* Left */}
            <motion.div {...fadeUp()} className="why-text-col">
              <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Why Bellavio Care</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
                A Different Kind of Care Provider
              </h2>
              <div className="divider-gold" />
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: '1.25rem 0 2rem' }}>
                We built Bellavio Care because every person deserves support that is consistent, dignified and genuinely compassionate. We are not a large corporation — we are a local team that cares deeply about every person we support.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {['Consistent, trusted support workers', 'Flexible scheduling around your life', 'Open, honest communication always', 'Plan-managed & self-managed welcome'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--navy)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-gold btn-lg">
                Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Right — 3 feature cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {whyUs.map((item, i) => (
                <motion.div key={item.title} {...fadeUp(i * 0.1)}
                  style={{
                    display: 'flex', gap: '1.25rem', padding: '1.75rem',
                    borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border)',
                    background: 'white', transition: 'all 0.3s ease',
                  }}
                  whileHover={{ borderColor: 'rgba(201,168,76,0.4)', boxShadow: 'var(--shadow-md)', y: -3 }}>
                  <div className="icon-box" style={{ flexShrink: 0 }}>
                    <item.icon size={18} style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--navy)', marginBottom: '0.4rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.845rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .svc-title { font-size: 1.05rem; }
          .svc-desc { font-size: 0.875rem; }
          .svc-icon-wrap { width: 3.5rem; height: 3.5rem; }
          .svc-icon { width: 22px; height: 22px; }
          .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; }
          
          @media (max-width: 900px) { 
            .why-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } 
          }
          @media (max-width: 768px) {
            .services-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
            .card { padding: 20px !important; }
            .svc-icon-wrap { width: 40px !important; height: 40px !important; margin-bottom: 1rem !important; }
            .svc-icon { width: 20px !important; height: 20px !important; }
            .svc-title { font-size: 18px !important; }
            .svc-desc { font-size: 14px !important; margin-bottom: 1rem !important; }
            .why-text-col { padding: 0 20px !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════ */}
      <section className="section-lg" style={{ background: 'var(--navy-dark)', position: 'relative', overflow: 'hidden' }} aria-label="Testimonials">
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{
            position: 'absolute', top: '-20%', right: '-10%', width: '40rem', height: '40rem', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 4rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Participant Stories</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
              Hear From Our Community
            </h2>
            <div className="divider-gold centered" />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp(i * 0.1)}
                style={{
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 'var(--radius-lg)', padding: '2rem', backdropFilter: 'blur(8px)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(201,168,76,0.25)', y: -4 }}>
                <Quote size={28} style={{ color: 'var(--gold)', opacity: 0.2, position: 'absolute', top: '1.25rem', right: '1.25rem' }} />

                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }} aria-label="5 stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />)}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '2.5rem', height: '2.5rem', borderRadius: '50%', flexShrink: 0,
                    background: 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.72rem', fontWeight: 800, color: 'var(--navy)',
                  }}>{t.initials}</div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'white' }}>{t.name}</p>
                    <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.1rem' }}>{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy-xdark) 0%, var(--navy) 50%, var(--navy-light) 100%)',
        position: 'relative', overflow: 'hidden',
      }} aria-label="Call to action">
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: '60rem', height: '60rem', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 60%)',
          }} />
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0 }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '7rem 1.5rem' }}>
          <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
            <span className="tag" style={{ marginBottom: '1.75rem', display: 'inline-flex' }}>Start Your Journey</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Ready to Start with<br />
              <span className="gradient-text">Bellavio Care?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
              We'd love to hear from you. Reach out for a free, no-obligation conversation about how we can support you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold btn-xl">
                Contact Us Today <ArrowRight size={18} />
              </Link>
              <a href="tel:0405066000" className="btn btn-outline-white btn-xl">
                <Phone size={18} /> 0405 066 000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
