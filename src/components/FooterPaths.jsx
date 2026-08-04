import { motion, useReducedMotion } from 'framer-motion'

// Adapted from a "Background Paths" hero effect down to a subtle footer texture:
// fewer strokes, much lower opacity (it sits behind readable footer text/links,
// not a full-screen hero), and index-based durations instead of Math.random() so
// re-renders don't reshuffle the animation.
function FloatingPaths({ position }) {
  const prefersReducedMotion = useReducedMotion()
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${
      470 - i * 6
    } ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <svg
      className="absolute inset-0 h-full w-full text-ink"
      viewBox="0 0 696 316"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={0.06 + path.id * 0.015}
          initial={{ pathLength: 0.3, opacity: 0.45 }}
          animate={
            prefersReducedMotion
              ? undefined
              : { pathLength: 1, opacity: [0.25, 0.45, 0.25], pathOffset: [0, 1, 0] }
          }
          transition={{ duration: 22 + (path.id % 6) * 2.5, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </svg>
  )
}

export default function FooterPaths() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  )
}
