import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Car, Utensils, Heart, CheckCircle, ArrowRight, CreditCard, FileText } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const services = [
  {
    icon: Home, num: '01',
    title: 'Daily Living Support',
    tagline: 'Your home. Your routine. Our support.',
    description: 'Daily living support is about helping you maintain your independence in the comfort of your own home. Whether you need hands-on personal care, assistance with cooking, help with household chores or support managing your daily routine — our workers are here to help you live the way you choose.',
    suits: ['Help with personal hygiene and grooming', 'Meal preparation and nutrition assistance', 'Prompting or supervision with daily tasks', 'Regular or occasional home support'],
    expect: ['A consistent, familiar support worker', 'Flexible scheduling to fit your lifestyle', 'Support delivered with dignity — always', 'Clear communication at every step'],
    accent: '#4ade80',
  },
  {
    icon: Car, num: '02',
    title: 'Community Access',
    tagline: 'Your community. Your connections.',
    description: 'Community access support empowers you to engage fully with the world around you. We support participants to attend medical appointments, visit family and friends, access community events, join social groups and take part in activities that bring joy and meaning to your life.',
    suits: ['Difficulty travelling independently', 'Attending community events or programs', 'Working towards greater social engagement', 'Accessing health or therapy appointments'],
    expect: ['Safe, reliable transport to destinations', 'A supportive companion who respects your pace', 'Goal-focused outings aligned with your plan', 'Encouragement to try new things'],
    accent: '#60a5fa',
  },
  {
    icon: Utensils, num: '03',
    title: 'Domestic Assistance',
    tagline: 'A tidy home. A clearer mind.',
    description: 'A clean, organised home is essential for wellbeing. Our domestic assistance covers cleaning, laundry, ironing, vacuuming and general home organisation. We also assist with grocery shopping and meal preparation, helping you maintain a comfortable and healthy home environment.',
    suits: ['Heavy household tasks are difficult', 'Maintaining hygiene standards at home', 'Meal planning and grocery shopping help', 'Recovering from illness or managing conditions'],
    expect: ['Thorough, consistent home cleaning', 'Meal prep tailored to dietary requirements', 'Workers who treat your home with care', 'Weekly, fortnightly or as-needed scheduling'],
    accent: '#fb923c',
  },
  {
    icon: Heart, num: '04',
    title: 'Social Support',
    tagline: 'Genuine connection. Real companionship.',
    description: 'Social isolation has a profound impact on mental health and overall wellbeing. Our social support service provides genuine companionship, assistance with social activities and encouragement to maintain and build meaningful relationships — whether it is a coffee, a walk, or joining a local club.',
    suits: ['Experiencing loneliness or isolation', 'Wanting to participate in community activities', 'Building social skills and confidence', 'Benefiting from regular friendly company'],
    expect: ['Warm, genuine companionship', 'Help finding social activities in your area', 'Support to maintain existing connections', 'A judgment-free, welcoming environment'],
    accent: '#f472b6',
  },
]

const funding = [
  {
    icon: CreditCard,
    title: 'Plan-Managed',
    badge: 'Most Popular',
    desc: 'Your plan manager pays Bellavio Care directly from your NDIS funds. You get full provider flexibility without managing the finances yourself.',
    features: ['No invoicing stress for you', 'We deal with your plan manager directly', 'Full flexibility of providers'],
  },
  {
    icon: FileText,
    title: 'Self-Managed',
    badge: 'Maximum Flexibility',
    desc: 'You pay Bellavio Care and claim reimbursement through the NDIA myplace portal. Maximum control over your funding.',
    features: ['Full control over your funds', 'Choose any provider you like', 'Direct payment, then NDIA reimbursement'],
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>NDIS Services — Bellavio Care | Daily Living, Community Access &amp; More</title>
        <meta name="description" content="Explore Bellavio Care's NDIS services: Daily Living Support, Community Access, Domestic Assistance and Social Support across Australia." />
      </Helmet>

      {/* HERO */}
      <section className="page-hero" aria-label="Services hero">
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40rem', height: '40rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>What We Offer</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Our <span className="gradient-text">NDIS Services</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
              Every service we deliver is tailored to the individual — your goals, your schedule, your way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE INDEX */}
      <section style={{ background: 'var(--navy-dark)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0', overflow: 'auto' }}>
            {services.map((s, i) => (
              <a key={s.title} href={`#service-${i}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '1.1rem 1.5rem',
                  color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', fontWeight: 600,
                  textDecoration: 'none', borderBottom: '2px solid transparent',
                  transition: 'all 0.2s', whiteSpace: 'nowrap', flexShrink: 0,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderBottomColor = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderBottomColor = 'transparent' }}>
                <s.icon size={15} />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EXPANDED SERVICE SECTIONS */}
      {services.map((svc, i) => (
        <section key={svc.title} id={`service-${i}`}
          className="section-lg"
          style={{ background: i % 2 === 0 ? 'white' : 'var(--cream)' }}
          aria-label={svc.title}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="svc-grid">

              {/* Left — text */}
              <motion.div {...fadeUp()} style={{ order: i % 2 !== 0 ? 2 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '3.5rem', height: '3.5rem', borderRadius: '0.875rem',
                    background: 'linear-gradient(135deg, var(--navy-xdark), var(--navy))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 6px 20px rgba(27,43,75,0.25)',
                  }}>
                    <svc.icon size={20} style={{ color: 'var(--gold)' }} />
                  </div>
                  <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--navy)', opacity: 0.06, lineHeight: 1, fontFamily: "'Inter', sans-serif" }}>{svc.num}</span>
                </div>
                <p className="eyebrow" style={{ display: 'block', marginBottom: '0.625rem' }}>{svc.tagline}</p>
                <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>{svc.title}</h2>
                <div className="divider-gold" style={{ marginBottom: '1.25rem' }} />
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>{svc.description}</p>
                <Link to="/contact" className="btn btn-gold btn-lg">
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </motion.div>

              {/* Right — feature cards */}
              <motion.div {...fadeUp(0.12)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', order: i % 2 !== 0 ? 1 : 0 }}>
                {/* Who it suits */}
                <div style={{
                  borderRadius: 'var(--radius-md)', padding: '1.75rem',
                  background: 'white', border: '1.5px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--navy)', marginBottom: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--gold-pale)', border: '1px solid var(--border-gold)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle size={12} style={{ color: 'var(--gold)' }} />
                    </span>
                    Who This Suits
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {svc.suits.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.855rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        <CheckCircle size={14} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* What to expect */}
                <div style={{
                  borderRadius: 'var(--radius-md)', padding: '1.75rem',
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.02) 100%)',
                  border: '1.5px solid var(--border-gold)',
                }}>
                  <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--navy)', marginBottom: '1.1rem' }}>What to Expect</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {svc.expect.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.855rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        <CheckCircle size={14} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* NDIS FUNDING */}
      <section className="section-lg" style={{ background: 'linear-gradient(160deg, var(--navy-xdark) 0%, var(--navy) 60%, var(--navy-light) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50rem', height: '50rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 4rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>NDIS Funding</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
              How to Pay for Your Supports
            </h2>
            <div className="divider-gold centered" />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '820px', margin: '0 auto 3rem' }}>
            {funding.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i * 0.1)}
                style={{
                  background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-lg)', padding: '2.25rem 2rem',
                  position: 'relative', backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s',
                }}
                whileHover={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(201,168,76,0.3)' }}>
                <span style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '0.3rem 0.75rem', borderRadius: '99px',
                  background: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid var(--border-gold)',
                }}>{f.badge}</span>
                <div className="icon-box" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.25)', marginBottom: '1.5rem' }}>
                  <f.icon size={20} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: 'white', marginBottom: '0.75rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '1.25rem' }}>{f.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {f.features.map(feat => (
                    <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
                      <CheckCircle size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} />{feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Not sure which option suits you? We'll help you figure it out.</p>
            <Link to="/contact" className="btn btn-gold btn-lg">
              Ask Us Anything <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .svc-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } .svc-grid > div { order: unset !important; } }
      `}</style>
    </>
  )
}
