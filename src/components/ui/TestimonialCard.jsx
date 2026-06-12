import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TestimonialCard({ name, location, text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-white rounded-2xl p-8 flex flex-col gap-5 relative"
      style={{
        boxShadow: '0 4px 24px rgba(27,43,75,0.07)',
        border: '1px solid rgba(27,43,75,0.06)',
      }}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-10 h-10" style={{ color: '#C9A84C' }} />
      </div>

      {/* Stars */}
      <div className="flex gap-1" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4" style={{ color: '#C9A84C', fill: '#C9A84C' }} />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm leading-relaxed italic flex-1" style={{ color: '#475569' }}>
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
          style={{ backgroundColor: '#1B2B4B' }}
          aria-hidden="true"
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm" style={{ color: '#1B2B4B' }}>{name}</p>
          <p className="text-xs" style={{ color: '#94a3b8' }}>{location}</p>
        </div>
      </div>
    </motion.div>
  )
}
