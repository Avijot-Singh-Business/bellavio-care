import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-8 flex flex-col gap-5 cursor-default"
      style={{
        boxShadow: '0 4px 24px rgba(27,43,75,0.07)',
        border: '1px solid rgba(27,43,75,0.06)',
        transition: 'box-shadow 0.3s, transform 0.3s, border-color 0.3s',
      }}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 50px rgba(27,43,75,0.14)',
        borderColor: 'rgba(201,168,76,0.3)',
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: 'rgba(201,168,76,0.1)' }}
      >
        <Icon className="w-7 h-7" style={{ color: '#C9A84C' }} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-2" style={{ color: '#1B2B4B' }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{description}</p>
      </div>

      {/* Learn more link */}
      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 text-sm font-semibold group/link"
        style={{ color: '#C9A84C' }}
        aria-label={`Learn more about ${title}`}
      >
        Learn More
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
      </Link>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: '#C9A84C' }}
      />
    </motion.div>
  )
}
