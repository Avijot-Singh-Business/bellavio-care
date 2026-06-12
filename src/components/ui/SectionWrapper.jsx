import { motion } from 'framer-motion'

export default function SectionWrapper({
  children,
  className = '',
  bg = 'white',
  id,
}) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${className}`}
      style={{ backgroundColor: bg === 'cream' ? '#FAFAF7' : bg === 'navy' ? '#1B2B4B' : 'white' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, light = false, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={centered ? 'text-center max-w-3xl mx-auto mb-14' : 'max-w-2xl mb-14'}
    >
      {eyebrow && (
        <span
          className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full"
          style={{
            color: '#C9A84C',
            backgroundColor: light ? 'rgba(201,168,76,0.2)' : 'rgba(201,168,76,0.1)',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
        style={{ color: light ? '#ffffff' : '#1B2B4B' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: light ? 'rgba(255,255,255,0.7)' : '#64748b' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
