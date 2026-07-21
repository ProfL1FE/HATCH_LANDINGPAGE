import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

// Fades content up once it scrolls into view. Falls back to always-visible
// when reduced motion is requested (handled in CSS).
export function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ ...(delay ? { transitionDelay: `${delay}ms` } : {}), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ kicker, title, sub, align = 'center' }) {
  return (
    <Reveal className={`section-head align-${align}`}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  )
}

// stats: [{ value, label, sub, icon?: LucideComponent }]
export function StatBand({ stats }) {
  return (
    <Reveal className="stat-band glass">
      {stats.map((s) => {
        const Icon = s.icon
        return (
          <div className="stat" key={s.label}>
            {Icon && (
              <span className="stat-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.6} />
              </span>
            )}
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
            {s.sub && <span className="stat-sub">{s.sub}</span>}
          </div>
        )
      })}
    </Reveal>
  )
}

export function CtaBanner({ title, sub, button, art }) {
  return (
    <Reveal className={`cta-banner glass ${art ? 'has-scene' : ''}`}>
      <div className="cta-glow" aria-hidden="true" />
      {art && (
        <div className="cta-art" aria-hidden="true">
          <img src={art} alt="" className="cta-art-img" loading="lazy" />
        </div>
      )}
      <div className="cta-copy">
        <h2>{title}</h2>
        {sub && <p>{sub}</p>}
        <a href="#" className="btn btn-gold btn-lg">
          {button} <ArrowRight size={17} />
        </a>
      </div>
    </Reveal>
  )
}
