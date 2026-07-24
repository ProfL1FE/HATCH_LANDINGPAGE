import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../data/hatch'
import Button from './Button'
import { HatchLogo } from './Icon'

function NavItem({ to, label, onClick, mobile = false }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        mobile
          ? `rounded-lg px-3 py-2.5 text-[13px] font-semibold uppercase tracking-[2px] ${
              isActive ? 'bg-panel text-cyan' : 'text-muted hover:text-cyan'
            }`
          : `group relative py-2 text-[12px] font-semibold uppercase tracking-[2.2px] transition duration-300 ${
              isActive ? 'text-cyan' : 'text-muted hover:text-cyan'
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
      className="anim-fade-down sticky top-0 z-50 border-b border-line shadow-[0_4px_20px_rgba(15,23,42,0.06)] backdrop-blur-md"
      style={{ background: 'linear-gradient(180deg, rgba(255,255,255,1), rgba(249,250,252,1))' }}
    >
      <div className="hatch-wrap-wide flex h-[74px] items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <HatchLogo size={38} className="text-cyan" />
          <span className="leading-tight">
            <span className="block text-[17px] font-black tracking-[1px] text-ink">
              HATCH<sup className="text-[9px] font-bold">™</sup> <span className="text-cyan">2027</span>
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[3.5px] text-muted">
              AI for Humanity
            </span>
          </span>
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
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-xl lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div
          className="border-t border-line lg:hidden"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,1), rgba(249,250,252,1))' }}
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
