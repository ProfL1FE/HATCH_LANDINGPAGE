const PATHS = {
  user: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c1.6-3 4-4.4 6.5-4.4s4.9 1.4 6.5 4.4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="2.8" />
      <circle cx="16.5" cy="10" r="2.2" />
      <path d="M4 19c1.2-2.6 3-3.9 5.5-3.9 1.4 0 2.6.4 3.6 1.2" />
      <path d="M14 19c.7-1.7 1.9-2.6 3.4-2.6 1.6 0 2.8.9 3.4 2.6" />
    </>
  ),
  bulb: (
    <>
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z" />
      <path d="M9.8 19h4.4M10.6 21h2.8" />
    </>
  ),
  bank: (
    <>
      <path d="M12 3l8.5 5.5h-17L12 3z" />
      <path d="M5 8.5V18M9.5 8.5V18M14.5 8.5V18M19 8.5V18" />
      <path d="M3.5 21h17M3.5 18h17" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.3 3.9 5.1 3.9 8.5s-1.3 6.2-3.9 8.5c-2.6-2.3-3.9-5.1-3.9-8.5s1.3-6.2 3.9-8.5z" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3 2.2 4.4 5.6 4.4 9.2l-2.2 2.3H9.8l-2.2-2.3C7.6 8.6 9 5.2 12 3z" />
      <circle cx="12" cy="9.5" r="1.5" />
      <path d="M9.5 15.5L8 19.5M14.5 15.5l1.5 4M12 15.5v5" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.4l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7L12 3.5z" />
  ),
  flag: (
    <>
      <path d="M6 21V4" />
      <path d="M6 5h11.5l-2.8 3.8 2.8 3.7H6" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 4.2C7.7 4.2 6.3 5.6 6.2 7.3 4.8 7.8 3.8 9.1 3.8 10.7c0 1.1.5 2.1 1.3 2.8-.3.5-.4 1.1-.4 1.7 0 1.9 1.5 3.4 3.3 3.5.4 1.1 1.5 1.8 2.7 1.8h.3V4.2h-1.5z" />
      <path d="M14.5 4.2c1.8 0 3.2 1.4 3.3 3.1 1.4.5 2.4 1.8 2.4 3.4 0 1.1-.5 2.1-1.3 2.8.3.5.4 1.1.4 1.7 0 1.9-1.5 3.4-3.3 3.5-.4 1.1-1.5 1.8-2.7 1.8H13V4.2h1.5z" />
      <path d="M9 8.6c.7.4 1.6.4 2.3 0M9.3 12.3c.7.4 1.6.4 2.3 0M12.4 8.6c.7.4 1.6.4 2.3 0M12.4 12.3c.7.4 1.6.4 2.3 0" />
    </>
  ),
  mic: (
    <>
      <rect x="9.3" y="3" width="5.4" height="10.5" rx="2.7" />
      <path d="M6 11.2a6 6 0 0 0 12 0" />
      <path d="M12 17.2v3.3M9 20.5h6" />
    </>
  ),
  graduationCap: (
    <>
      <path d="M12 4.5L2.5 9.2 12 14l9.5-4.8L12 4.5z" />
      <path d="M6.3 11.4v4.3c0 1.8 2.6 3.3 5.7 3.3s5.7-1.5 5.7-3.3v-4.3" />
      <path d="M21.5 9.2v6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.3" y="7.8" width="17.4" height="11.2" rx="2.2" />
      <path d="M8.7 7.8V6.2a2 2 0 0 1 2-2h2.6a2 2 0 0 1 2 2v1.6" />
      <path d="M3.3 13h17.4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <circle cx="8" cy="8.7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8 11v5.5" />
      <path d="M11.3 16.5v-3.7c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1v3.7" />
      <path d="M11.3 11v5.5" />
    </>
  ),
  facebook: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M13.6 8.3h-1.1c-.8 0-1.3.5-1.3 1.3v1.5h2.3l-.3 2h-2v5.4" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.8" cy="7.2" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: (
    <>
      <path d="M13.5 3.5v10.9a2.9 2.9 0 1 1-2.9-2.9c.2 0 .4 0 .6.1" />
      <path d="M13.5 6.1c.5 1.5 1.8 2.6 3.4 2.8" />
    </>
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path d="M10.3 9.3v5.4l4.7-2.7z" fill="currentColor" stroke="none" />
    </>
  ),
}

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}

export function EggIcon({ size = 44, className = '' }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 24 29" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="egg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe8a3" />
          <stop offset="100%" stopColor="#ffd166" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C8 2 4.5 10 4.5 16.5a7.5 7.5 0 0 0 15 0C19.5 10 16 2 12 2z"
        stroke="url(#egg-gold)"
        strokeWidth="1.6"
        fill="rgba(255,209,102,0.12)"
      />
    </svg>
  )
}

export function HatchLogo({ size = 38, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hatch-logo-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe8a3" />
          <stop offset="100%" stopColor="#c99a3f" />
        </linearGradient>
      </defs>
      <ellipse cx="20" cy="16" rx="9" ry="3.6" stroke="url(#hatch-logo-gold)" strokeWidth="1.1" opacity="0.55" />
      <path
        d="M20 8c-4.4 0-8 7.4-8 13a8 8 0 0 0 16 0c0-5.6-3.6-13-8-13z"
        stroke="url(#hatch-logo-gold)"
        strokeWidth="1.5"
        fill="rgba(255,209,102,0.08)"
      />
      <circle cx="20" cy="21" r="1.4" fill="url(#hatch-logo-gold)" />
    </svg>
  )
}
