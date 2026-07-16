import { useEffect, useState } from 'react'

export default function ScrollNav({ sections }) {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0

    function measure() {
      raf = 0
      const marker = window.innerHeight * 0.45
      let current = 0
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top <= marker) current = i
      })
      setActive(current)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [sections])

  function goTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
      className="anim-fade fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
      style={{ animationDelay: '0.6s' }}
      aria-label="Section navigation"
    >
      <span className="font-serif text-sm tracking-[1px] text-ink">
        {String(active + 1).padStart(2, '0')}
      </span>

      <div className="flex flex-col items-center gap-2.5">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(s.id)}
            aria-label={`Go to ${s.label}`}
            title={s.label}
            className={`rounded-full transition-all duration-300 ease-out ${
              i === active
                ? 'h-2 w-2 bg-gold shadow-[0_0_10px_rgba(255,209,102,0.9)]'
                : 'h-1.5 w-1.5 bg-white/30 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <div className="relative h-12 w-px overflow-hidden rounded-full bg-white/15">
        <div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-gold to-violet transition-[height] duration-200 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/35 pt-1.5">
        <div className="anim-arrow h-1.5 w-[3px] rounded-full bg-white/70" />
      </div>
      <span className="text-[9px] font-semibold uppercase tracking-[2.5px] text-muted">Scroll</span>
      <span className="anim-arrow text-sm leading-none text-muted">↓</span>
    </div>
  )
}
