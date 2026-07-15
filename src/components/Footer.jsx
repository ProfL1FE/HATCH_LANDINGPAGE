import { Link } from 'react-router-dom'

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line py-9 text-sm text-[#8fa3bb]">
      <div className="hatch-wrap grid gap-6 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <b className="text-white">HATCH™ 2027</b>
          <p>
            Organised by CareerBank™. Strategic Partners: World Halalpreneur Council and World Talent Council.
            National talent discovery and venture development challenge for AI for Humanity.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line bg-white/6 px-[13px] py-2.5 text-[#dcecff] hover:bg-white/12"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <b className="text-white">Quick Links</b>
          <p className="flex flex-col gap-1.5 mt-2">
            <Link to="/journey" className="hover:text-white">Journey</Link>
            <Link to="/awards" className="hover:text-white">Awards</Link>
            <Link to="/resources" className="hover:text-white">Resources</Link>
            <Link to="/partners" className="hover:text-white">Partners</Link>
          </p>
        </div>
        <div>
          <b className="text-white">Access</b>
          <p className="mt-2">
            JO1NID for students
            <br />
            JO1NBiz for partners
            <br />
            JO1NUNI for universities
          </p>
        </div>
      </div>
    </footer>
  )
}
