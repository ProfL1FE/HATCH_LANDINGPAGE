const VARIANTS = {
  green: 'bg-green',
  gold: 'bg-gold',
}

export default function Badge({ children, variant = 'green', className = '' }) {
  return (
    <span className={`inline-block rounded-full px-[9px] py-[5px] text-[12px] font-extrabold text-on-brand ${VARIANTS[variant]} ${className}`}>
      {children}
    </span>
  )
}
