import { Link } from 'react-router-dom'
import Icon from './Icon'
import { useTheme } from '../context/ThemeContext'
import hatchLogoLight from '../assets/HATCH_LOGO_P1.png'
import hatchLogoDark from '../assets/HATCH_LOGO_P2.png'

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
  const { theme } = useTheme()
  const hatchLogo = theme === 'dark' ? hatchLogoDark : hatchLogoLight

  return (
    <footer className="border-t border-chrome-border bg-chrome-bg pt-14 pb-8 text-sm text-chrome-ink-muted">
      <div className="hatch-wrap grid gap-10 md:grid-cols-[1.3fr_.7fr_.7fr_.9fr_.7fr]">
        <div>
          <Link to="/" className="flex flex-col items-start leading-none">
            <img
              src={hatchLogo}
              alt="HATCH"
              className={`h-6 w-auto ${theme === 'dark' ? '' : 'brightness-150 contrast-125'}`}
            />
            <span className="mt-1 text-[9px] font-medium tracking-wide text-chrome-ink-muted">
              Ideas Worth Hatching
            </span>
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
                className="grid h-10 w-10 place-items-center rounded-full border border-chrome-border bg-chrome-hover text-chrome-ink-muted transition hover:bg-chrome-hover"
              >
                <Icon name={s.icon} size={17} />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <b className="text-chrome-ink">{col.title}</b>
            <p className="mt-3 flex flex-col gap-2">
              {col.links.map((l) => (
                <Link key={l.label} to={l.to} className="hover:text-chrome-ink">
                  {l.label}
                </Link>
              ))}
            </p>
          </div>
        ))}
      </div>

      <div className="hatch-wrap mt-11 border-t border-chrome-border pt-6 text-center text-[13px]">
        © 2027 HATCH™. All rights reserved.
      </div>
    </footer>
  )
}
