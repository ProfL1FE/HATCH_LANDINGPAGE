import { Link } from 'react-router-dom'

export function EggMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 3.5C13 3.5 7.5 13.5 7.5 22.5a12.5 12.5 0 0 0 25 0C32.5 13.5 27 3.5 20 3.5Z"
        stroke="url(#eggGrad)"
        strokeWidth="2"
      />
      <path
        d="M20 12c-2 3-1 5 .8 6.8 1.6 1.6 2 3.6.2 6.2"
        stroke="url(#eggGrad)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="eggGrad" x1="8" y1="4" x2="32" y2="36">
          <stop stopColor="var(--gold-bright)" />
          <stop offset="1" stopColor="var(--gold-deep)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Logo() {
  return (
    <Link to="/journey" className="logo" aria-label="HATCH 2027 home">
      <EggMark />
      <span className="logo-text">
        <span className="logo-name">
          HATCH<sup>™</sup> <em>2027</em>
        </span>
        <span className="logo-tag">AI for Humanity</span>
      </span>
    </Link>
  )
}
