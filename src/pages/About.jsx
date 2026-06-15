import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Shield, Star, Handshake, ArrowRight, CheckCircle, MapPin, User } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const values = [
  { icon: Shield, title: 'Dignity', body: 'We treat every participant with the highest respect. Your privacy, preferences and autonomy are at the heart of everything we do.' },
  { icon: Star,   title: 'Reliability', body: 'You can count on us. We show up on time, follow through on commitments, and communicate proactively — always.' },
  { icon: Heart,  title: 'Compassion', body: 'Genuine care is not a checkbox. We take the time to understand your life, your challenges and your goals — and we support you accordingly.' },
  { icon: Handshake, title: 'Excellence', body: 'We hold ourselves to the highest standards — from worker selection and training to the quality of every support interaction.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Bellavio Care | NDIS Support Melbourne &amp; Victoria</title>
        <meta name="description" content="Learn about Bellavio Care — founded to give every NDIS participant the support they need to live life on their own terms across Melbourne and Victoria." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" style={{ paddingBottom: '5rem' }} aria-label="About page hero">
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40rem', height: '40rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Our Story</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              About <span className="gradient-text">Bellavio Care</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
              Founded with one purpose — to give every participant the support they need to live life on their own terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-lg" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="story-grid">

            {/* Text */}
            <motion.div {...fadeUp()}>
              <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Who We Are</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
                A Care Provider Built from the Heart
              </h2>
              <div className="divider-gold" />
              <div className="prose" style={{ marginTop: '1.5rem' }}>
                <p>Bellavio Care was founded with one purpose — to give every participant the support they need to live life on their own terms. We believe that quality disability support is not just about completing tasks. It is about building trust, respecting individuality, and helping people flourish.</p>
                <p>Based in Melbourne, Victoria, we proudly serve participants across all of Victoria. We come to you wherever you are. As a mobile provider, we understand that great support should not depend on your postcode.</p>
                <p>Our name says it all. <strong style={{ color: 'var(--navy)' }}>Bella</strong> — beautiful. <strong style={{ color: 'var(--navy)' }}>Avi</strong> — light. <strong style={{ color: 'var(--navy)' }}>Via</strong> — path. We are the beautiful path to independent living, and we take that responsibility seriously.</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2.25rem', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-gold btn-lg">Our Services <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn btn-outline-navy btn-lg">Get in Touch</Link>
              </div>
            </motion.div>

            {/* Visual card */}
            <motion.div {...fadeUp(0.12)} style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '1.75rem', overflow: 'hidden',
                background: 'linear-gradient(160deg, var(--navy-xdark) 0%, var(--navy) 60%, var(--navy-light) 100%)',
                aspectRatio: '4/4.5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                position: 'relative', boxShadow: 'var(--shadow-xl)',
              }}
                role="img" aria-label="Bellavio Care — care, dignity, respect">
                <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                }} />
                <div style={{ zIndex: 1, textAlign: 'center', padding: '3rem' }}>
                  <div style={{
                    width: '5.5rem', height: '5.5rem', borderRadius: '50%', margin: '0 auto 1.5rem',
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.06))',
                    border: '2px solid rgba(201,168,76,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Heart size={28} style={{ color: 'var(--gold)' }} />
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
                    Care · Dignity · Respect
                  </p>
                  {/* Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.07)', borderRadius: '1rem', overflow: 'hidden' }}>
                    {[['Melbourne', 'VIC Based'], ['Vic', 'Wide'], ['4', 'Services'], ['NDIS', 'Provider']].map(([a, b]) => (
                      <div key={a+b} style={{ background: 'rgba(255,255,255,0.04)', padding: '1.1rem 0.75rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '0.95rem' }}>{a}</div>
                        <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem', marginTop: '0.15rem' }}>{b}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div style={{
                position: 'absolute', bottom: '-1.5rem', left: '2rem',
                background: 'white', borderRadius: '1rem', padding: '0.875rem 1.25rem',
                boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: '0.6rem',
              }}>
                <MapPin size={15} style={{ color: 'var(--gold)' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--navy)' }}>Officer, VIC 3809</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>Serving Melbourne & Victoria</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .story-grid { grid-template-columns: 1fr !important; gap: 4rem !important; } }`}</style>
      </section>

      {/* VALUES */}
      <section className="section-lg" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 4rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>What Drives Us</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Our Core Values
            </h2>
            <div className="divider-gold centered" style={{ margin: '1rem auto 1rem' }} />
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
              Not just words — the standards we hold ourselves to every single day.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(i * 0.09)}
                className="card"
                style={{ padding: '2.25rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '4rem', height: '4rem', borderRadius: '1rem', marginBottom: '0.25rem',
                  background: 'linear-gradient(135deg, var(--navy-xdark) 0%, var(--navy) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(27,43,75,0.2)',
                }}>
                  <v.icon size={20} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--navy)' }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="section-lg" style={{ background: 'white' }}>
        <div className="container">
          <motion.div {...fadeUp()} style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              borderRadius: '2rem', overflow: 'hidden', boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '2fr 3fr',
            }} className="director-grid">
              {/* Photo side */}
              <div style={{
                background: 'linear-gradient(160deg, var(--navy-xdark) 0%, var(--navy) 100%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '3.5rem 2.5rem', gap: '1.25rem', position: 'relative',
              }}
                role="img" aria-label="Our Director of Bellavio Care">
                <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
                <div style={{
                  width: '7rem', height: '7rem', borderRadius: '50%', zIndex: 1,
                  background: 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(201,168,76,0.4)',
                }}>
                  <User size={40} style={{ color: 'var(--navy)' }} />
                </div>
                <div style={{ textAlign: 'center', zIndex: 1 }}>
                  <p className="eyebrow" style={{ marginTop: '0.25rem' }}>Our Director</p>
                </div>
              </div>

              {/* Bio side */}
              <div style={{ padding: '3.5rem 3rem', background: 'white' }}>
                <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Meet Our Director</span>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>Our Director</h2>
                <div className="prose">
                  <p>Bellavio Care was founded with a deeply personal commitment to transforming how disability support is delivered across Melbourne and Victoria. With a background in healthcare and community services, our director understands the challenges participants and families face when navigating the NDIS.</p>
                  <p>The vision is simple: every participant deserves to be treated as an individual — with respect, warmth and genuine professional care. Bellavio Care is led with the same values we would want for our own family.</p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
                  {['NDIS Expert', 'Community Focused', 'Passionate Advocate'].map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.72rem', fontWeight: 700, padding: '0.35rem 0.9rem', borderRadius: '99px',
                      background: 'var(--cream)', color: 'var(--navy)', border: '1px solid var(--border)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <style>{`@media (max-width: 700px) { .director-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  )
}
