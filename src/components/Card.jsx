export default function Card({ children, className = '', highlight = false }) {
  return (
    <div
      className={`hatch-panel p-[22px] ${highlight ? 'border-cyan/45' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
