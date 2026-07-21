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
              isActive ? 'bg-white/8 text-cyan' : 'text-white/75 hover:text-cyan'
            }`
          : `group relative py-2 text-[12px] font-semibold uppercase tracking-[2.2px] transition duration-300 ${
              isActive ? 'text-cyan' : 'text-white/75 hover:text-cyan hover:[text-shadow:0_0_14px_rgba(58,214,222,0.45)]'
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
      className="anim-fade-down sticky top-0 z-50 border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.55)] backdrop-blur-md"
      style={{ background: 'linear-gradient(180deg, rgba(28,18,60,1), rgba(12,20,38,1))' }}
    >
      <div className="hatch-wrap-wide flex h-[74px] items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <HatchLogo size={38} className="text-cyan" />
          <span className="leading-tight">
            <span className="block text-[17px] font-black tracking-[1px] text-white">
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
          <Button to="/sign-in" variant="outline" size="sm" className="uppercase tracking-[1.5px]">
            Sign In
          </Button>
          <Button to="/register" variant="gradient" size="sm" className="uppercase tracking-[1.5px]">
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
          className="border-t border-white/5 lg:hidden"
          style={{ background: 'linear-gradient(180deg, rgba(28,18,60,1), rgba(12,20,38,1))' }}
        >
          <nav className="hatch-wrap flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} mobile onClick={() => setOpen(false)} />
            ))}
            <div className="mt-2 flex gap-2.5">
              <Button to="/sign-in" variant="outline" size="sm" className="flex-1 uppercase tracking-[1.5px]" onClick={() => setOpen(false)}>
                Sign In
              </Button>
              <Button to="/register" variant="gradient" size="sm" className="flex-1 uppercase tracking-[1.5px]" onClick={() => setOpen(false)}>
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
