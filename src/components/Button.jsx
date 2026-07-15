import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-gradient-to-br from-cyan to-violet text-[#06101c] shadow-[0_15px_45px_rgba(110,231,255,0.22)] hover:brightness-105',
  gold: 'bg-gradient-to-br from-[#ffe8a3] to-gold text-[#06101c] shadow-[0_15px_45px_rgba(255,209,102,0.18)] hover:brightness-105',
  secondary: 'bg-white/7 border border-line text-ink hover:bg-white/12',
}

const SIZES = {
  md: 'px-[18px] py-[13px] text-[15px]',
  sm: 'px-[13px] py-[9px] text-[13px]',
}

export default function Button({ as, to, href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-extrabold cursor-pointer border-0 transition ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
