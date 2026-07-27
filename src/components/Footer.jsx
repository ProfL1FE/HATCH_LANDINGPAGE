import { Link } from 'react-router-dom'
import Icon from './Icon'
import hatchLogo from '../assets/HATCH_LOGO_P1.png'

const SOCIALS = [
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/' },
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/' },
  { label: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/' },
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/' },
]

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { to: '/', label: 'Home' },
      { to: '/journey', label: 'Journey' },
      { to: '/awards', label: 'Awards' },
      { to: '/about', label: 'About' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/resources', label: 'Resources' },
      { to: '/partners', label: 'Partners' },
    ],
  },
  {
    title: 'Access',
    links: [
      { to: '/join', label: 'JO1NID for students' },
      { to: '/join', label: 'JO1NBiz for partners' },
      { to: '/join', label: 'JO1NUNI for universities' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/privacy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms of Use' },
      { to: '/cookies', label: 'Cookie Policy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-14 pb-8 text-sm text-white/60" style={{ backgroundColor: 'var(--color-navy)' }}>
      <div className="hatch-wrap grid gap-10 md:grid-cols-[1.3fr_.7fr_.7fr_.9fr_.7fr]">
        <div>
          <Link to="/" className="flex items-center">
            <img src={hatchLogo} alt="HATCH — Ideas Worth Hatching" className="h-14 w-auto" />
          </Link>
          <p className="mt-4 max-w-[360px]">
            Organised by CareerBank™. Strategic Partners: World Halalpreneur Council and World Talent Council.
            National talent discovery and venture development challenge for AI for Humanity.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/10"
              >
                <Icon name={s.icon} size={17} />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <b className="text-white">{col.title}</b>
            <p className="mt-3 flex flex-col gap-2">
              {col.links.map((l) => (
                <Link key={l.label} to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              ))}
            </p>
          </div>
        ))}
      </div>

      <div className="hatch-wrap mt-11 border-t border-white/10 pt-6 text-center text-[13px]">
        © 2027 HATCH™. All rights reserved.
      </div>
    </footer>
  )
}
