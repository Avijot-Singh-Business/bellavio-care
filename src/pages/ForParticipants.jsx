import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, FileText, Handshake, ArrowRight, HelpCircle, ChevronDown, CheckCircle } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const ndisSteps = [
  { n: '01', title: 'Check Eligibility', body: 'Under 65, Australian citizen or permanent resident, permanent disability affecting daily life. Contact NDIA on 1800 800 110.' },
  { n: '02', title: 'Apply to the NDIS', body: 'Apply online at ndis.gov.au or by phone. You will need supporting evidence from your treating professionals.' },
  { n: '03', title: 'Receive Your Plan', body: 'Once approved, you receive an NDIS plan outlining your funded supports and goals — reviewed regularly as your needs change.' },
  { n: '04', title: 'Choose Your Provider', body: 'With your plan in place, choose a provider like Bellavio Care to deliver the supports listed in your plan.' },
]

const steps = [
  { icon: Phone, step: '01', title: 'Contact Us', body: 'Call 0405 066 000 or fill in our contact form. We will respond within one business day.' },
  { icon: MessageCircle, step: '02', title: 'Initial Meeting', body: 'A free, no-obligation conversation — in person or by phone — to understand your needs and goals.' },
  { icon: FileText, step: '03', title: 'Sign Agreement', body: 'A clear Service Agreement outlining supports, schedule and pricing. Completely transparent — no surprises.' },
  { icon: Handshake, step: '04', title: 'Supports Begin', body: 'Your support starts. We match you with the right worker and keep you informed every step of the way.' },
]

const faqs = [
  {
    q: 'Can I use Bellavio Care if I am self-managed or plan-managed?',
    a: 'Yes! Bellavio Care is an NDIS provider serving plan-managed and self-managed participants. You just need an active NDIS plan.'
  },
  {
    q: 'What areas do you cover?',
    a: 'We are based in Melbourne, VIC and serve participants across all of Victoria. This includes suburbs throughout Greater Melbourne and regional Victoria. We come to you — so no matter where you are in Victoria, contact us and we will work to support you.'
  },
  {
    q: 'How do I pay for services?',
    a: 'Plan-managed participants: your plan manager pays Bellavio Care directly from your NDIS funds using our invoices. Self-managed participants: you pay Bellavio Care, then claim reimbursement through the NDIA myplace portal. We will walk you through every step.'
  },
  {
    q: 'Can I choose my own support worker?',
    a: 'Absolutely. We work hard to match you with a worker who suits your personality, needs and schedule. If you are not comfortable with your worker, simply let us know and we will find someone who is a better fit — no questions asked.'
  },
  {
    q: 'What if I want to change my service agreement?',
    a: 'You can change your agreement at any time with reasonable notice. If your needs change, you want to add or remove services, or simply adjust your schedule — just contact us and we will update your agreement promptly.'
  },
]

function FAQItem({ q, a, i }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div {...fadeUp(i * 0.06)} className="faq-item">
      <button onClick={() => setOpen(o => !o)} className={`faq-trigger${open ? ' open' : ''}`} aria-expanded={open}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          <HelpCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }} />
          <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--navy)', lineHeight: 1.5 }}>{q}</span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22,1,0.36,1] }}
            style={{ overflow: 'hidden' }}>
            <div className="faq-body" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ForParticipants() {
  return (
    <>
      <Helmet>
        <title>For Participants — Bellavio Care | How the NDIS Works &amp; Getting Started</title>
        <meta name="description" content="New to the NDIS? Bellavio Care explains how NDIS works and how to get started with support services across Melbourne and Victoria." />
      </Helmet>

      {/* HERO */}
      <section className="page-hero" aria-label="For participants hero">
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40rem', height: '40rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Participant Information</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              For <span className="gradient-text">Participants</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
              New to the NDIS or looking for a new provider? We make the process simple, clear and stress-free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOW NDIS WORKS */}
      <section className="section-lg" style={{ background: 'white' }}>
        <div className="container">
          <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 4rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Understanding the NDIS</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
              How the NDIS Works
            </h2>
            <div className="divider-gold centered" />
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginTop: '1rem' }}>
              The NDIS provides funding to eligible Australians with a permanent disability so they can access the support they need to live a full life.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {ndisSteps.map((s, i) => (
              <motion.div key={s.n} {...fadeUp(i * 0.09)}
                style={{
                  borderRadius: 'var(--radius-md)', padding: '2rem 1.75rem',
                  background: 'var(--cream)', border: '1.5px solid var(--border)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.3s',
                }}
                whileHover={{ borderColor: 'rgba(201,168,76,0.3)', boxShadow: 'var(--shadow-md)' }}>
                {/* Large bg number */}
                <span style={{ position: 'absolute', top: '-0.5rem', right: '0.75rem', fontSize: '4.5rem', fontWeight: 900, color: 'var(--navy)', opacity: 0.04, lineHeight: 1, userSelect: 'none' }}>{s.n}</span>
                <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>{s.n}</p>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--navy)', marginBottom: '0.625rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.855rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>{s.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.3)}
            style={{
              borderRadius: 'var(--radius-md)', padding: '1.25rem 1.75rem', textAlign: 'center',
              background: 'rgba(201,168,76,0.06)', border: '1.5px solid var(--border-gold)',
            }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              For more information visit{' '}
              <a href="https://www.ndis.gov.au" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>ndis.gov.au</a>
              {' '}or call the NDIA on{' '}
              <a href="tel:1800800110" style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>1800 800 110</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="section-lg" style={{ background: 'linear-gradient(160deg, var(--navy-xdark) 0%, var(--navy) 60%, var(--navy-light) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '45rem', height: '45rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 4.5rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Ready to Begin?</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
              Getting Started with Bellavio Care
            </h2>
            <div className="divider-gold centered" />
          </motion.div>

          {/* Steps */}
          <div className="steps-grid">
            {steps.map((s, i) => (
              <motion.div key={s.step} {...fadeUp(i * 0.1)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                <div style={{
                  width: '4.5rem', height: '4.5rem', borderRadius: '1.25rem',
                  background: 'rgba(201,168,76,0.12)', border: '2px solid rgba(201,168,76,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  <s.icon size={22} style={{ color: 'var(--gold)' }} />
                  {/* Step connector line */}
                  {i < steps.length - 1 && (
                    <div style={{
                      position: 'absolute', left: '100%', top: '50%', transform: 'translateY(-50%)',
                      width: '2rem', height: '1px', background: 'rgba(201,168,76,0.2)',
                    }} aria-hidden="true" className="step-line" />
                  )}
                </div>
                <p className="eyebrow" style={{ fontSize: '0.65rem' }}>{s.step}</p>
                <h3 className="step-title" style={{ fontWeight: 700, color: 'white' }}>{s.title}</h3>
                <p className="step-desc" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{s.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.4)} style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn btn-gold btn-xl">
              Start Your Journey <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
        <style>{`
          .step-title { font-size: 0.95rem; }
          .step-desc { font-size: 0.855rem; }
          .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; margin-bottom: 3.5rem; }
          @media (max-width: 1024px) {
            .steps-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
            .step-line { display: none; }
          }
          @media (max-width: 768px) { 
            .steps-grid { grid-template-columns: 1fr; gap: 32px; }
            .step-line { display: none; }
            .step-title { font-size: 18px !important; text-align: center; }
            .step-desc { font-size: 14px !important; text-align: center; }
          }
        `}</style>
      </section>

      {/* FAQ */}
      <section className="section-lg" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 4rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Common Questions</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
              Frequently Asked Questions
            </h2>
            <div className="divider-gold centered" />
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginTop: '1rem' }}>
              Everything you need to know before getting started.
            </p>
          </motion.div>

          <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} i={i} />)}
          </div>

          <motion.div {...fadeUp(0.3)} style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Still have a question?</p>
            <Link to="/contact" className="btn btn-gold btn-lg">
              Ask Us Directly <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
