import { useCallback, useEffect, useRef } from 'react'

const PARTICLES_SCRIPT_SRC = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'

// Cyan/teal matches the site's existing brand glow (see the hero underline's rgba(58,214,222)
// shadow) rather than the imported component's own light/dark theme-toggle palette, which this
// site has no equivalent of.
const PARTICLE_COLORS = { particles: '#3ad6de', lines: '#3ad6de', accent: '#0e7f92' }

export default function ParticlesBackground({ id = 'particles-bg' }) {
  const startedRef = useRef(false)

  const initParticles = useCallback(() => {
    const oldCanvas = document.querySelector(`#${id} canvas`)
    if (oldCanvas) oldCanvas.remove()

    if (window.pJSDom?.length > 0) {
      window.pJSDom.forEach((p) => p.pJS?.fn?.vendors?.destroypJS?.())
      window.pJSDom = []
    }

    window.particlesJS(id, {
      particles: {
        number: { value: 170, density: { enable: true, value_area: 900 } },
        color: { value: PARTICLE_COLORS.particles },
        shape: { type: 'circle', stroke: { width: 0.5, color: PARTICLE_COLORS.accent } },
        opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1, opacity_min: 0.3 } },
        size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 1 } },
        line_linked: { enable: true, distance: 170, color: PARTICLE_COLORS.lines, opacity: 0.45, width: 1 },
        move: { enable: true, speed: 1.6, random: true, out_mode: 'bounce' },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: { distance: 180, line_linked: { opacity: 0.6 } },
          push: { particles_nb: 3 },
        },
      },
      retina_detect: true,
    })
  }, [id])

  useEffect(() => {
    function start() {
      if (startedRef.current) return
      startedRef.current = true
      initParticles()
    }

    if (window.particlesJS) {
      start()
      return
    }

    const existing = document.querySelector(`script[src="${PARTICLES_SCRIPT_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', start, { once: true })
      return () => existing.removeEventListener('load', start)
    }

    const script = document.createElement('script')
    script.src = PARTICLES_SCRIPT_SRC
    script.async = true
    script.addEventListener('load', start, { once: true })
    document.body.appendChild(script)

    return () => {
      if (window.pJSDom?.length > 0) {
        window.pJSDom.forEach((p) => p.pJS?.fn?.vendors?.destroypJS?.())
        window.pJSDom = []
      }
      startedRef.current = false
    }
  }, [initParticles])

  return <div id={id} className="absolute inset-0" />
}
