import { useEffect, useRef, useState } from 'react'

// AI-generated video loops dropped into src/assets/loops/ (egg.mp4,
// trophy.mp4, …) are picked up automatically. When the file is missing —
// or the visitor prefers reduced motion — the SVG fallback renders instead.
const loops = import.meta.glob('../../assets/jason/loops/*.{mp4,webm}', {
  eager: true,
  import: 'default',
})

export function loopSrc(name) {
  return loops[`../assets/loops/${name}.mp4`] || loops[`../assets/loops/${name}.webm`]
}

export default function MediaLoop({ name, fallback = null, className = '' }) {
  const src = loopSrc(name)
  const videoRef = useRef(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = (e) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Some browsers pause muted autoplay for offscreen/background media —
  // nudge playback whenever the loop becomes visible again.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const nudge = () => {
      if (video.paused) video.play().catch(() => {})
    }
    const io = new IntersectionObserver(([e]) => e.isIntersecting && nudge(), { threshold: 0.2 })
    io.observe(video)
    document.addEventListener('visibilitychange', nudge)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', nudge)
    }
  }, [src, reduceMotion])

  if (!src || reduceMotion) return fallback

  return (
    <div className={`media-loop ${className}`}>
      <video ref={videoRef} src={src} autoPlay muted loop playsInline aria-hidden="true" />
    </div>
  )
}
