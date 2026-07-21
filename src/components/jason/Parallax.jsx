import { useEffect, useRef } from 'react'

// Gentle mouse parallax for hero visuals. Desktop pointers only; inert for
// touch devices and visitors who prefer reduced motion.
export default function Parallax({ strength = 14, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2
        const y = (e.clientY / window.innerHeight - 0.5) * 2
        el.style.transform = `translate3d(${(-x * strength).toFixed(1)}px, ${(-y * strength).toFixed(1)}px, 0)`
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [strength])

  return (
    <div ref={ref} className={`parallax ${className}`}>
      {children}
    </div>
  )
}
