import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../data/hatch'
import Button from './Button'
import hatchLogo from '../assets/HATCH_LOGO_P1.png'

function NavItem({ to, label, onClick, mobile = false }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        mobile
          ? `rounded-lg px-3 py-2.5 text-[13px] font-semibold uppercase tracking-[2px] ${
              isActive ? 'bg-white/10 text-cyan' : 'text-white/70 hover:text-cyan'
            }`
          : `group relative py-2 text-[12px] font-semibold uppercase tracking-[2.2px] transition duration-300 ${
              isActive ? 'text-cyan' : 'text-white/70 hover:text-cyan'
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

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="anim-fade-down sticky top-0 z-50 border-b border-white/10 shadow-[0_4px_20px_rgba(15,23,42,0.25)] backdrop-blur-md"
      style={{ backgroundColor: 'var(--color-navy)' }}
    >
      <div className="hatch-wrap-wide flex h-[74px] items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center">
          <img src={hatchLogo} alt="HATCH — Ideas Worth Hatching" className="h-16 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <Button to="/login" variant="outline" size="sm" className="uppercase tracking-[1.5px]">
            Sign In
          </Button>
          <Button to="/join" variant="outline" size="sm" className="uppercase tracking-[1.5px]">
            Register
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-xl text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div
          className="border-t border-white/10 lg:hidden"
          style={{ backgroundColor: 'var(--color-navy)' }}
        >
          <nav className="hatch-wrap flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} mobile onClick={() => setOpen(false)} />
            ))}
            <div className="mt-2 flex gap-2.5">
              <Button to="/login" variant="outline" size="sm" className="flex-1 uppercase tracking-[1.5px]" onClick={() => setOpen(false)}>
                Sign In
              </Button>
              <Button to="/join" variant="outline" size="sm" className="flex-1 uppercase tracking-[1.5px]" onClick={() => setOpen(false)}>
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
