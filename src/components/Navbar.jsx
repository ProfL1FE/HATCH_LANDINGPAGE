import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../data/hatch'
import Button from './Button'
import { useTheme } from '../context/ThemeContext'
import hatchLogoLight from '../assets/HATCH_LOGO_P1.png'
import hatchLogoDark from '../assets/HATCH_LOGO_P2.png'

function NavItem({ to, label, onClick, mobile = false }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        mobile
          ? `rounded-lg px-3 py-2.5 text-[13px] font-semibold uppercase tracking-[2px] ${
              isActive ? 'bg-chrome-hover text-cyan' : 'text-chrome-ink-muted hover:text-cyan'
            }`
          : `group relative py-2 text-[12px] font-semibold uppercase tracking-[2.2px] transition duration-300 ${
              isActive ? 'text-cyan' : 'text-chrome-ink-muted hover:text-cyan'
            }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {!mobile && (
            <span
              className={`absolute -bottom-2 left-1/2 h-px w-7 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan to-transparent transition-opacity duration-500 ease-out ${
                isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-45'
              }`}
            >
              <span
                className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_10px_3px_rgba(58,214,222,0.85)] transition-transform duration-500 ease-out ${
                  isActive ? 'scale-100' : 'scale-0'
                }`}
              />
            </span>
          )}
        </>
      )}
    </NavLink>
  )
}

function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-chrome-border text-chrome-ink transition hover:bg-chrome-hover ${className}`}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z" />
        </svg>
      )}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()
  const hatchLogo = theme === 'dark' ? hatchLogoDark : hatchLogoLight

  return (
    <header
      className="anim-fade-down sticky top-0 z-50 border-b border-chrome-border bg-chrome-bg shadow-[0_4px_20px_rgba(15,23,42,0.25)] backdrop-blur-md"
    >
      <div className="hatch-wrap-wide flex h-[74px] items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={hatchLogo}
            alt="HATCH — Ideas Worth Hatching"
            className={`h-11 w-auto ${theme === 'dark' ? '' : 'brightness-150 contrast-125'}`}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <Button to="/login" variant="chrome-outline" size="sm" className="uppercase tracking-[1.5px]">
            Sign In
          </Button>
          <Button to="/join" variant="chrome-outline" size="sm" className="uppercase tracking-[1.5px]">
            Register
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-chrome-border text-xl text-chrome-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-chrome-border bg-chrome-bg lg:hidden">
          <nav className="hatch-wrap flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} mobile onClick={() => setOpen(false)} />
            ))}
            <div className="mt-2 flex gap-2.5">
              <Button to="/login" variant="chrome-outline" size="sm" className="flex-1 uppercase tracking-[1.5px]" onClick={() => setOpen(false)}>
                Sign In
              </Button>
              <Button to="/join" variant="chrome-outline" size="sm" className="flex-1 uppercase tracking-[1.5px]" onClick={() => setOpen(false)}>
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
