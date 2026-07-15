const VARIANTS = {
  green: 'bg-green',
  gold: 'bg-gold',
}

export default function Badge({ children, variant = 'green', className = '' }) {
  return (
    <span className={`inline-block rounded-full px-[9px] py-[5px] text-[12px] font-extrabold text-[#06101c] ${VARIANTS[variant]} ${className}`}>
      {children}
    </span>
  )
}
