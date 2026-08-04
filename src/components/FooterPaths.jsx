import { motion, useReducedMotion } from 'framer-motion'

// Adapted from a "Background Paths" hero effect down to a footer texture: fewer
// strokes, and a fixed-length dash sliding one-directionally around pathOffset
// 0→1 (rather than animating pathLength/opacity back and forth) — offset 1 is
// visually identical to offset 0, so the loop restart is seamless instead of
// the jump you get from reversing direction at each keyframe.
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
    length: 0.15 + (i % 5) * 0.04,
  }))

  return (
    <svg
      className="absolute inset-0 h-full w-full text-white"
      viewBox="0 0 696 316"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeLinecap="round"
          strokeOpacity={0.18 + (path.id % 8) * 0.035}
          initial={{ pathLength: path.length, pathOffset: 0 }}
          animate={prefersReducedMotion ? undefined : { pathOffset: [0, 1] }}
          transition={{
            duration: 16 + (path.id % 6) * 3,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      ))}
    </svg>
  )
}

export default function FooterPaths() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* The path formula sweeps diagonally through one side of its own coordinate
          space, so a footer this wide needs a horizontally-mirrored second copy —
          otherwise the effect only ever shows up on the left half. */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="absolute inset-0 scale-x-[-1]">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
    </div>
  )
}
