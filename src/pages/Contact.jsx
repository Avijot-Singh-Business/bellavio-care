import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const hearAboutOptions = [
  'Google Search', 'Facebook / Instagram', 'Referral from Support Coordinator',
  'Word of Mouth', 'NDIS Community', 'Other',
]

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '0405 066 000', href: 'tel:0405066000' },
  { icon: Mail, label: 'Email', value: 'singhavijot17@gmail.com', href: 'mailto:singhavijot17@gmail.com', sub: 'Updating to avijot@bellaviocare.com.au' },
  { icon: MapPin, label: 'Location', value: 'Officer, VIC 3809', sub: 'Serving Melbourne & Victoria' },
  { icon: Clock, label: 'Office Hours', value: 'Mon – Fri, 9am – 5pm', sub: 'AEST' },
]

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', source: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your full name.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.phone.trim() || !/^[\d\s+\-()]{8,}$/.test(form.phone)) e.phone = 'Please enter a valid phone number.'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Please write at least a sentence so we can help you better.'
    return e
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) { setErrors(v); return }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '5rem 2rem', minHeight: '400px' }}>
        <div style={{
          width: '5rem', height: '5rem', borderRadius: '50%', marginBottom: '1.75rem',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
          border: '2px solid var(--border-gold)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <CheckCircle size={26} style={{ color: 'var(--gold)' }} />
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
          Message Received!
        </h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '360px', marginBottom: '0.75rem' }}>
          Thank you, <strong style={{ color: 'var(--navy)' }}>{form.name.split(' ')[0]}</strong>. We will be in touch within one business day.
        </p>
        <a href="tel:0405066000" style={{ color: 'var(--gold)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
          Urgent? Call 0405 066 000 →
        </a>
      </motion.div>
    )
  }

  const fieldStyle = (name) => ({
    ...{ fontFamily: 'inherit', color: 'var(--navy)', background: 'white' },
    ...(errors[name] ? { borderColor: '#ef4444', boxShadow: '0 0 0 3px rgba(239,68,68,0.08)' } : {}),
  })

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Name */}
      <div>
        <label htmlFor="cf-name" style={{ display: 'block', fontWeight: 600, fontSize: '0.82rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>
          Full Name <span style={{ color: 'var(--gold)' }}>*</span>
        </label>
        <input id="cf-name" className="form-input" style={fieldStyle('name')}
          type="text" name="name" value={form.name} onChange={onChange}
          placeholder="e.g. Jane Smith" autoComplete="name" aria-required="true" />
        {errors.name && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }} role="alert">
          <AlertCircle size={12} />{errors.name}</p>}
      </div>

      {/* Email + Phone */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
        <div>
          <label htmlFor="cf-email" style={{ display: 'block', fontWeight: 600, fontSize: '0.82rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>
            Email <span style={{ color: 'var(--gold)' }}>*</span>
          </label>
          <input id="cf-email" className="form-input" style={fieldStyle('email')}
            type="email" name="email" value={form.email} onChange={onChange}
            placeholder="you@example.com" autoComplete="email" aria-required="true" />
          {errors.email && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }} role="alert">
            <AlertCircle size={12} />{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-phone" style={{ display: 'block', fontWeight: 600, fontSize: '0.82rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>
            Phone <span style={{ color: 'var(--gold)' }}>*</span>
          </label>
          <input id="cf-phone" className="form-input" style={fieldStyle('phone')}
            type="tel" name="phone" value={form.phone} onChange={onChange}
            placeholder="0400 000 000" autoComplete="tel" aria-required="true" />
          {errors.phone && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }} role="alert">
            <AlertCircle size={12} />{errors.phone}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" style={{ display: 'block', fontWeight: 600, fontSize: '0.82rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>
          How Can We Help? <span style={{ color: 'var(--gold)' }}>*</span>
        </label>
        <textarea id="cf-message" className="form-input" style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: '140px' }}
          name="message" value={form.message} onChange={onChange} rows={5}
          placeholder="Tell us about your situation, what services you need, or any questions you have..." />
        {errors.message && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }} role="alert">
          <AlertCircle size={12} />{errors.message}</p>}
      </div>

      {/* Source */}
      <div>
        <label htmlFor="cf-source" style={{ display: 'block', fontWeight: 600, fontSize: '0.82rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>
          How Did You Hear About Us?
        </label>
        <select id="cf-source" className="form-input" name="source" value={form.source} onChange={onChange}
          style={{ cursor: 'pointer', color: form.source ? 'var(--navy)' : '#b0bac9', fontFamily: 'inherit' }}>
          <option value="" disabled>Select an option…</option>
          {hearAboutOptions.map(o => <option key={o} value={o} style={{ color: 'var(--navy)' }}>{o}</option>)}
        </select>
      </div>

      {/* Submit */}
      <button type="submit" disabled={submitting} className="btn btn-gold btn-lg"
        style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: submitting ? 0.75 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>
        {submitting
          ? <><div style={{ width: '1.1rem', height: '1.1rem', border: '2px solid rgba(27,43,75,0.25)', borderTopColor: 'var(--navy)', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /> Sending…</>
          : <><Send size={16} /> Send Message</>
        }
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        We respond within 1 business day · Your information stays private.
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } } @media (max-width: 520px) { .form-row { grid-template-columns: 1fr !important; } }`}</style>
    </form>
  )
}

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Bellavio Care — NDIS Provider Melbourne &amp; Victoria</title>
        <meta name="description" content="Contact Bellavio Care today. Call 0405 066 000 or send us a message to discuss NDIS support services across Melbourne and Victoria." />
      </Helmet>

      {/* HERO */}
      <section className="page-hero" aria-label="Contact page hero">
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40rem', height: '40rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Get in Touch</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
              Free, no-obligation conversation. We would love to hear about how we can support you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section-lg" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">

            {/* Form */}
            <motion.div {...fadeUp()}
              style={{
                background: 'white', borderRadius: '1.75rem', padding: '3rem',
                boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border)',
              }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: '0.375rem' }}>
                  Send Us a Message
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  We will respond within one business day.
                </p>
                <div className="divider-gold" style={{ marginTop: '1rem' }} />
              </div>
              <ContactForm />
            </motion.div>

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Contact card */}
              <motion.div {...fadeUp(0.12)}
                style={{
                  background: 'linear-gradient(160deg, var(--navy-xdark) 0%, var(--navy) 100%)',
                  borderRadius: '1.5rem', padding: '2.25rem',
                  boxShadow: 'var(--shadow-xl)', position: 'relative', overflow: 'hidden',
                }}>
                <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold), var(--gold-light))' }} />
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>Contact Details</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.4rem', position: 'relative', zIndex: 1 }}>
                  {contactDetails.map(({ icon: Icon, label, value, href, sub }) => (
                    <li key={label}>
                      {href ? (
                        <a href={href} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                          <div className="icon-box" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.25)', flexShrink: 0, width: '2.5rem', height: '2.5rem', borderRadius: '0.6rem' }}>
                            <Icon size={14} style={{ color: 'var(--gold)' }} />
                          </div>
                          <div>
                            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.2rem' }}>{label}</p>
                            <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>{value}</p>
                            {sub && <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', marginTop: '0.15rem' }}>{sub}</p>}
                          </div>
                        </a>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                          <div className="icon-box" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.25)', flexShrink: 0, width: '2.5rem', height: '2.5rem', borderRadius: '0.6rem' }}>
                            <Icon size={14} style={{ color: 'var(--gold)' }} />
                          </div>
                          <div>
                            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.2rem' }}>{label}</p>
                            <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>{value}</p>
                            {sub && <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', marginTop: '0.15rem' }}>{sub}</p>}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Map placeholder */}
              <motion.div {...fadeUp(0.2)}
                style={{
                  borderRadius: '1.5rem', overflow: 'hidden', minHeight: '180px',
                  background: 'linear-gradient(135deg, #f0f4f8, #e8ecf2)',
                  border: '2px dashed var(--border)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                  padding: '2.5rem',
                }}
                role="img" aria-label="Map placeholder — Officer VIC 3809">
                <div style={{
                  width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--gold-pale)',
                  border: '1.5px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <MapPin size={18} style={{ color: 'var(--gold)' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy)' }}>Officer, VIC 3809</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Serving Melbourne &amp; Victoria</p>
                </div>
                <a href="https://maps.google.com/?q=Officer+VIC+3809" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.3)', paddingBottom: '1px' }}>
                  View on Google Maps →
                </a>
              </motion.div>

              {/* Quick call */}
              <motion.div {...fadeUp(0.28)}
                style={{
                  borderRadius: '1.25rem', padding: '1.5rem', textAlign: 'center',
                  background: 'white', border: '1.5px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--navy)', marginBottom: '0.3rem' }}>Prefer to call?</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>We love hearing from participants directly.</p>
                <a href="tel:0405066000" className="btn btn-gold"
                  style={{ display: 'inline-flex', padding: '0.75rem 1.75rem', fontSize: '0.875rem' }}>
                  <Phone size={15} /> 0405 066 000
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  )
}
