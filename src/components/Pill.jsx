export default function Pill({ children, className = '' }) {
  return <span className={`hatch-pill ${className}`}>{children}</span>
}
