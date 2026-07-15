import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../data/hatch'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/76 backdrop-blur-xl">
      <div className="hatch-wrap flex h-[74px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-black tracking-tight">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan to-violet font-black text-[#06101c]">
            H
          </span>
          <span>
            HATCH™ 2027
            <br />
            <small className="text-[13px] font-semibold text-muted">AI for Humanity</small>
          </span>
        </Link>

        <nav className="hidden gap-[17px] text-sm text-muted lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white transition')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 sm:flex">
          <Button to="/signin" variant="secondary" size="sm">
            Sign In
          </Button>
          <Button to="/register" size="sm">
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
        <div className="border-t border-line bg-panel lg:hidden">
          <nav className="hatch-wrap flex flex-col gap-1 py-4 text-muted">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `rounded-lg px-3 py-2.5 ${isActive ? 'bg-white/8 text-white' : 'hover:text-white'}`}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-2.5">
              <Button to="/signin" variant="secondary" size="sm" className="flex-1" onClick={() => setOpen(false)}>
                Sign In
              </Button>
              <Button to="/register" size="sm" className="flex-1" onClick={() => setOpen(false)}>
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
