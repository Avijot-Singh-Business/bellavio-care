import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  size = 'md',
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  const variants = {
    primary: 'text-navy hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'border-2 text-white hover:text-navy hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'text-navy hover:bg-navy/5 hover:-translate-y-0.5',
    outline: 'border-2 hover:bg-navy hover:text-white hover:-translate-y-0.5',
  }

  const variantStyles = {
    primary: { backgroundColor: '#C9A84C', color: '#1B2B4B' },
    secondary: { borderColor: '#C9A84C', color: '#C9A84C', backgroundColor: 'transparent' },
    ghost: { color: '#1B2B4B' },
    outline: { borderColor: '#1B2B4B', color: '#1B2B4B' },
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  const style = variantStyles[variant]

  if (to) {
    return (
      <Link to={to} className={classes} style={style} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} style={style} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={classes} style={style} {...props}>
      {children}
    </button>
  )
}
