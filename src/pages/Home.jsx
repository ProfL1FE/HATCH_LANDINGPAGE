import { useRef, useState } from 'react'
import Section, { SectionHeading } from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import ScrollNav from '../components/ScrollNav'
import Icon from '../components/Icon'
import CtaCard from '../components/CtaCard'
import ParticlesBackground from '../components/ParticlesBackground'
import { HOME_JOURNEY, FAQ, HOME_SECTIONS, RECOGNITION, WHAT_IS_HATCH, AUDIENCES, WHY_JOIN } from '../data/hatch'
import hatchLogo from '../assets/HATCH_LOGO_P2.png'
import heroVideo from '../assets/heropage.mp4'
import utmLogo from '../assets/partners/utm.png'
import upmLogo from '../assets/partners/upm.png'
import mmuLogo from '../assets/partners/mmu.png'
import sunwayLogo from '../assets/partners/sunway.png'
import petronasLogo from '../assets/partners/petronas.svg'
import mdecLogo from '../assets/partners/mdec.svg'
import cradleLogo from '../assets/partners/cradle.jpg'
import maybankLogo from '../assets/partners/maybank.svg'
import ideaVideo from '../assets/idea.mp4'
import aiVideo from '../assets/ai.mp4'
import pitchingVideo from '../assets/pitching.mp4'
import launchVideo from '../assets/launch.mp4'
import ideaIcon from '../assets/icons/idea.png'
import searchIcon from '../assets/icons/search.png'
import podcastIcon from '../assets/icons/podcast-.png'
import medalIcon from '../assets/icons/gold-medal.png'
import favouritesIcon from '../assets/icons/favourites.png'
import trophyIcon from '../assets/icons/trophy.png'
import uniImage from '../assets/uni.jfif'
import prosImage from '../assets/pros.jfif'
import tvetImage from '../assets/tvet.jfif'
import hatchVideo from '../assets/hatch .mp4'
import playButtonIcon from '../assets/icons/playbutton.png'
import joinVideo from '../assets/join.mp4'

// Per-card accent for "What is HATCH" — same badge + photo-scrim treatment as the audience cards,
// rotated across gold/violet/cyan/red so each card reads as its own category at a glance.
const WHAT_IS_HATCH_STYLES = {
  Idea: { overlayFrom: '#8a5c14', overlayVia: '#b4790f', badgeFrom: 'var(--color-gold-light)', badgeTo: 'var(--color-gold)' },
  Build: { overlayFrom: 'var(--color-violet-deep)', overlayVia: 'var(--color-royal-purple)', badgeFrom: 'var(--color-violet)', badgeTo: 'var(--color-royal-purple)' },
  Pitch: { overlayFrom: 'var(--color-cyan-deep)', overlayVia: 'var(--color-cyan)', badgeFrom: 'var(--color-aqua)', badgeTo: 'var(--color-cyan-deep)' },
  Launch: { overlayFrom: '#7a1530', overlayVia: '#d6294a', badgeFrom: '#e8496b', badgeTo: '#8a1530' },
}

// Looping clip shown inside each "What is HATCH" icon circle in place of a flat icon.
const WHAT_IS_HATCH_VIDEOS = {
  Idea: ideaVideo,
  Build: aiVideo,
  Pitch: pitchingVideo,
  Launch: launchVideo,
}

const AUDIENCE_IMAGES = {
  'University Students': uniImage,
  'Professionals & Adults': prosImage,
  'Schools & TVET': tvetImage,
}

const AUDIENCE_POSITIONS = {
  'University Students': 'object-right',
  'Professionals & Adults': 'object-[65%_50%]',
  'Schools & TVET': 'object-right',
}

// Per-card icon-badge accent for "Who Can Join HATCH" — violet for the university card,
// teal/cyan for the other two, matching the reference's varied (not uniform) badge colors.
const AUDIENCE_STYLES = {
  'University Students': { badgeFrom: 'var(--color-violet)', badgeTo: 'var(--color-royal-purple)' },
  'Professionals & Adults': { badgeFrom: 'var(--color-cyan)', badgeTo: 'var(--color-aqua)' },
  'Schools & TVET': { badgeFrom: 'var(--color-aqua)', badgeTo: 'var(--color-cyan-deep)' },
}

const PARTNER_LOGOS = [
  { name: 'UTM', src: utmLogo },
  { name: 'UPM', src: upmLogo },
  { name: 'MMU', src: mmuLogo },
  { name: 'Sunway', src: sunwayLogo },
  { name: 'Petronas', src: petronasLogo },
  { name: 'MDEC', src: mdecLogo },
  { name: 'Cradle', src: cradleLogo },
  { name: 'Maybank', src: maybankLogo },
]

const HOME_JOURNEY_ICONS = {
  Idea: ideaIcon,
  Discover: searchIcon,
  Pitch: podcastIcon,
  'Top 100': medalIcon,
  'Top 20': favouritesIcon,
  Champion: trophyIcon,
}

// Per-card icon-circle accent for "Why Join" — mirrors the reference's varied badge colors.
const WHY_JOIN_STYLES = {
  'National Recognition': { bg: 'rgba(214,41,74,0.1)', color: 'var(--color-red)' },
  'AI Masterclasses': { bg: 'rgba(8,145,178,0.1)', color: 'var(--color-cyan)' },
  'Powerful Mentorship': { bg: 'rgba(109,77,224,0.1)', color: 'var(--color-violet)' },
  'Industry Networking': { bg: 'rgba(21,143,82,0.1)', color: 'var(--color-green)' },
  'Professional Portfolio': { bg: 'rgba(180,121,15,0.1)', color: 'var(--color-gold)' },
  'Launchpad Access': { bg: 'rgba(14,127,146,0.1)', color: 'var(--color-aqua)' },
}

// Subtle ambient sparkle over the hero's right-hand "breathing room" — gold/cyan mix, low opacity, slow drift.
const HERO_PARTICLES = [
  { left: '12%', top: '18%', size: 5, color: 'var(--color-gold)', opacity: 0.5, duration: '8s', delay: '0s' },
  { left: '28%', top: '52%', size: 4, color: 'var(--color-cyan)', opacity: 0.45, duration: '9.5s', delay: '1.2s' },
  { left: '45%', top: '30%', size: 3, color: 'var(--color-gold-light)', opacity: 0.4, duration: '7s', delay: '2.4s' },
  { left: '60%', top: '68%', size: 5, color: 'var(--color-aqua)', opacity: 0.5, duration: '10s', delay: '0.6s' },
  { left: '75%', top: '22%', size: 4, color: 'var(--color-gold)', opacity: 0.4, duration: '8.5s', delay: '3s' },
  { left: '88%', top: '55%', size: 3, color: 'var(--color-cyan)', opacity: 0.45, duration: '9s', delay: '1.8s' },
  { left: '52%', top: '80%', size: 4, color: 'var(--color-aqua)', opacity: 0.35, duration: '11s', delay: '2.2s' },
]

export default function Home() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  function playVideo() {
    setIsPlaying(true)
    videoRef.current?.play()
  }

  return (
    <div className="hatch-atmosphere-home">
      <ScrollNav sections={HOME_SECTIONS} />

      {/* Hero — header + hero fill exactly one screen; next section appears on scroll */}
      {/* 75px = 74px header + its 1px bottom border */}
      <section id="discover" className="relative flex min-h-[calc(100svh-75px)] flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-bg">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-[70%_42%]"
          />
        </div>

        {/* Cinematic readability masks — video stays untouched, these only improve text contrast */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(5,10,25,0.82) 0%, rgba(5,10,25,0.62) 28%, rgba(5,10,25,0.28) 55%, transparent 100%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 45%, rgba(5,10,25,0.18) 78%, rgba(5,10,25,0.42) 100%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-20"
          style={{ background: 'linear-gradient(180deg, rgba(5,10,25,0.3), transparent)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-64"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(6,12,24,0.55), #09111f)' }}
        />

        {/* Top: 40 / 60 split — left copy, right lets the egg breathe */}
        <div className="hatch-wrap-wide relative grid flex-1 items-center gap-8 pt-6 short:pt-4 xshort:pt-3 lg:grid-cols-[40%_60%]">
          <div className="max-w-[560px]">
            <h1 className="anim-rise font-serif m-0 mb-3 text-[clamp(46px,5.8vw,84px)] font-semibold leading-[1.08] tracking-[-0.5px] text-white short:mb-3 short:text-[clamp(36px,4.2vw,52px)] xshort:text-[clamp(31px,3.6vw,43px)]">
              Every idea
              <br />
              has wonders.
              <br />
              <img src={hatchLogo} alt="HATCH" className="inline-block h-[0.82em] w-auto align-middle" />
              <sup className="text-[0.35em] text-white">™</sup> it.
            </h1>
            <div
              className="anim-rise mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-cyan to-royal-purple short:mb-3.5 xshort:mb-2.5"
              style={{ animationDelay: '0.15s', boxShadow: '0 0 12px rgba(58,214,222,0.45)' }}
            />
            <p className="anim-rise mb-6 max-w-[520px] text-xl leading-relaxed text-white/88 short:mb-4 short:max-w-[460px] short:text-lg xshort:mb-3 xshort:text-base" style={{ animationDelay: '0.2s' }}>
              HATCH is the <span className="text-cyan">human accelerator</span> for talent, creativity and human potential. Where ideas are challenged,
              refined and transformed into <span className="text-royal-purple">real impact</span>.
            </p>
            <div className="anim-rise flex flex-wrap items-center gap-6" style={{ animationDelay: '0.3s' }}>
              <Button to="/join" variant="primary" size="md" className="uppercase tracking-[1.5px]">
                Start Your Journey →
              </Button>
              <a
                href="#video"
                className="group inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[1.5px] text-white transition duration-300 hover:text-cyan"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan/50 text-[11px] transition duration-300 group-hover:border-cyan group-hover:shadow-[0_0_14px_rgba(58,214,222,0.4)]">
                  ▶
                </span>
                Watch the Story
              </a>
            </div>
          </div>
          <div aria-hidden="true" className="relative hidden lg:block">
            {HERO_PARTICLES.map((p, i) => (
              <span
                key={i}
                className="anim-float absolute rounded-full"
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  opacity: p.opacity,
                  boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                  animationDuration: p.duration,
                  animationDelay: p.delay,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What is HATCH */}
      <section id="what-is-hatch" className="relative overflow-hidden py-10 short:py-8 xshort:py-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(115deg, rgba(91,48,214,0.13) 0%, rgba(233,237,243,0.5) 45%, rgba(8,145,178,0.16) 100%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] sm:block"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.16) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            maskImage: 'linear-gradient(90deg, transparent, black 25%, black 90%, transparent), radial-gradient(ellipse at 60% 50%, black 55%, transparent 90%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        />

        <div className="hatch-wrap relative grid items-center gap-8 short:gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cyan">What is HATCH?</p>
            <h2 className="m-0 mb-3 text-[clamp(28px,3.6vw,42px)] font-extrabold leading-[1.08] tracking-[-1px]">
              A movement of ideas that <span className="text-cyan">change</span>{' '}
              <span className="bg-gradient-to-r from-royal-purple to-violet bg-clip-text text-transparent">the world.</span>
            </h2>
            <p className="mb-5 max-w-[440px] text-body short:text-[15px]">
              We bring together dreamers, thinkers and changemakers to solve real-world problems and build a better future.
            </p>
            <Button to="/journey" variant="primary" size="sm" className="uppercase tracking-[1px]">
              Explore HATCH →
            </Button>
          </div>

          <div className="relative grid grid-cols-2 gap-3">
            {WHAT_IS_HATCH.map((w) => {
              const style = WHAT_IS_HATCH_STYLES[w.title]
              const video = WHAT_IS_HATCH_VIDEOS[w.title]
              return (
                <Card key={w.title} className="relative min-h-[168px] overflow-hidden bg-black p-0">
                  {video && (
                    <video
                      src={video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(0deg, ${style.overlayFrom}f2 0%, ${style.overlayVia}70 45%, transparent 75%)` }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-3.5">
                    <div
                      className="grid h-9 w-9 place-items-center rounded-xl text-white shadow-[0_6px_16px_rgba(0,0,0,0.35)]"
                      style={{ background: `linear-gradient(135deg, ${style.badgeFrom}, ${style.badgeTo})` }}
                    >
                      <Icon name={w.icon} size={17} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-[15px] text-white">{w.title}</h3>
                      <p className="text-[12.5px] leading-snug text-white/85">{w.desc}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey Preview */}
      <section id="journey-preview" className="relative overflow-hidden py-10 short:py-7 xshort:py-5">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, var(--color-violet-deep) 0%, var(--color-royal-purple) 45%, var(--color-cyan-deep) 100%)',
          }}
        />
        <ParticlesBackground id="particles-pathway" />
        {/* pointer-events-none so mouse-move reaches the particle canvas underneath through the
            empty space in this box — only the button opts back in to receive clicks. */}
        <div className="hatch-wrap relative pointer-events-none">
          <h2 className="m-0 mb-5 text-center text-[clamp(26px,3.4vw,40px)] font-extrabold leading-[1.05] tracking-[-1.5px] text-white">
            The <span className="text-cyan">Pathway</span>
          </h2>
          <div className="relative flex snap-x snap-mandatory justify-between gap-0 overflow-x-auto pb-2 pt-2">
            <div className="anim-line absolute left-[36px] right-[36px] top-[23px] hidden h-px bg-gradient-to-r from-cyan via-gold to-cyan sm:block" />
            {HOME_JOURNEY.map((s) => {
              const iconImg = HOME_JOURNEY_ICONS[s.title]
              return (
                <div key={s.title} className="relative min-w-[84px] shrink-0 snap-start text-center">
                  <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-2xl shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                    {iconImg ? <img src={iconImg} alt="" className="h-7 w-7 object-contain" /> : s.icon}
                  </div>
                  <b className="mt-2 block text-xs text-white">{s.title}</b>
                </div>
              )
            })}
          </div>
          <div className="mt-4 text-center">
            <Button
              to="/journey"
              variant="secondary"
              size="sm"
              className="pointer-events-auto !border-white/40 !text-white hover:!bg-white/12"
            >
              See the full interactive journey
            </Button>
          </div>
        </div>
      </section>

      {/* Built for Everyone */}
      <Section id="built-for-everyone">
        <SectionHeading
          title={
            <>
              <span className="text-[1.2em]">WHO CAN JOIN</span>{' '}
              <img src={hatchLogo} alt="HATCH" className="inline-block h-[0.8em] w-auto align-middle" />
            </>
          }
          center
        />
        <div className="grid gap-4 md:grid-cols-3">
          {AUDIENCES.map((a) => {
            const style = AUDIENCE_STYLES[a.title]
            return (
              <Card key={a.title} className="relative min-h-[320px] overflow-hidden bg-black p-0">
                <img src={AUDIENCE_IMAGES[a.title]} alt="" className={`absolute inset-0 h-full w-full object-cover ${AUDIENCE_POSITIONS[a.title]}`} />
                {/* Same violet/purple shade as before, but blended across a wider, softer zone
                    (multiple stops) instead of a hard cutoff, so it fades into the photo rather
                    than reading as a flat color block. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(42,24,84,0.9) 0%, rgba(91,48,214,0.55) 28%, rgba(91,48,214,0.22) 46%, rgba(91,48,214,0) 66%)',
                  }}
                />
                <div className="absolute inset-0 flex w-[72%] flex-col justify-between p-5">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                    style={{ background: `linear-gradient(135deg, ${style.badgeFrom}, ${style.badgeTo})` }}
                  >
                    <Icon name={a.icon} size={22} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold uppercase leading-tight text-white">{a.title}</h3>
                    <span className="mb-3 block h-0.5 w-6 rounded-full bg-cyan" />
                    <p className="mb-4 text-[13px] text-white/85">{a.desc}</p>
                    <Button
                      to={a.to}
                      variant="secondary"
                      size="sm"
                      className="!border-transparent !bg-white !text-ink shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:!bg-white/90"
                    >
                      Learn More →
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Why Join HATCH */}
      <section id="why-join" className="relative overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(circle at 12% 15%, rgba(58,214,222,0.09), transparent 40%), radial-gradient(circle at 88% 85%, rgba(138,107,255,0.09), transparent 40%)',
          }}
        />

        <div className="relative mx-auto w-[92vw] max-w-[1400px]">
          <h2 className="m-0 mb-10 text-center text-[clamp(28px,3.6vw,42px)] font-extrabold leading-[1.05] tracking-[-1.5px]">
            Why join <img src={hatchLogo} alt="HATCH" className="inline-block h-[0.78em] w-auto align-middle" />?
          </h2>

          <div className="grid gap-6 lg:grid-cols-[34%_1fr] lg:items-stretch">
            <div className="relative min-h-[280px] overflow-hidden rounded-[26px] bg-black">
              <video src={aiVideo} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-6 text-white">
                We provide the tools, mentorship and opportunities to help your ideas become{' '}
                <span className="font-bold text-cyan">real-world impact.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_JOIN.map((w) => {
                const style = WHY_JOIN_STYLES[w.label]
                return (
                  <Card key={w.label} className="flex items-start gap-3">
                    <div
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
                      style={{ background: style.bg, color: style.color }}
                    >
                      <Icon name={w.icon} size={19} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-[15px]">{w.label}</h3>
                      <p className="text-[12.5px] leading-snug text-body">{w.desc}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <Section id="recognition">
        <SectionHeading kicker="Recognition" title="Earned progression, not just prizes." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {RECOGNITION.map((r) => (
            <Card key={r.label} className="text-center">
              <b className="block text-2xl">{r.stat}</b>
              <span className="text-[13px] text-muted">{r.label}</span>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button to="/awards" variant="secondary">Explore all award tiers</Button>
        </div>
      </Section>

      {/* Video */}
      <Section id="video" className="bg-panel/40">
        <div className="relative aspect-[2.4/1] overflow-hidden rounded-[26px] bg-black">
          <video
            ref={videoRef}
            src={hatchVideo}
            controls={isPlaying}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {!isPlaying && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black from-10% via-black/60 via-40% to-black/10" />
              <div className="absolute inset-y-0 left-0 flex flex-col justify-center gap-4 p-6 sm:p-10">
                <h2 className="m-0 font-serif text-[clamp(26px,3.5vw,42px)] font-semibold leading-tight text-white">
                  <img src={hatchLogo} alt="HATCH" className="inline-block h-[0.75em] w-auto align-middle" /> in
                  <br />
                  90 seconds
                </h2>
                <button
                  onClick={playVideo}
                  className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/40 px-5 py-2.5 text-xs font-bold uppercase tracking-[1.5px] text-white transition duration-300 hover:border-cyan hover:text-cyan"
                >
                  <img src={playButtonIcon} alt="" className="h-8 w-8" />
                  Watch Video
                </button>
              </div>
              <button
                onClick={playVideo}
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-300 hover:scale-105"
              >
                <img src={playButtonIcon} alt="Play video" className="h-28 w-28 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]" />
              </button>
            </>
          )}
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners" className="bg-panel/40">
        <SectionHeading kicker="Our Partners" title="Backed by universities and industry." center />
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="anim-marquee flex w-max items-center gap-x-8">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="grid h-20 w-40 shrink-0 place-items-center rounded-2xl bg-white p-4 opacity-80 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:opacity-100"
              >
                <img src={p.src} alt={p.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section id="faq-preview">
        <div className="hatch-on-gradient-soft mx-auto mb-10 max-w-[640px] text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-white" style={{ textShadow: 'none' }}>
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[3px]">
              <Icon name="sparkles" size={12} />
              FAQ
            </span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="m-0 mb-3 text-[clamp(28px,4vw,44px)] tracking-[-1px]">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="m-0 text-body">Everything you need to know about HATCH.</p>
        </div>

        <div className="mx-auto max-w-[760px] space-y-3">
          {[
            { q: 'Do I need to study business?', icon: 'question' },
            { q: 'Can I join alone?', icon: 'user' },
            { q: 'Who owns my idea?', icon: 'bulb' },
            { q: 'Can I use AI?', icon: 'sparkles' },
            { q: 'Is there a cash prize?', icon: 'star' },
            { q: 'Can students from different universities form a team?', icon: 'users' },
          ].map((f, i) => {
            const entry = FAQ.find((item) => item.q === f.q)
            return (
              <div key={f.q} className="flex gap-3">
                <div className="flex w-2 shrink-0 flex-col items-center pt-6">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${i === 0 ? 'bg-cyan' : 'bg-gold'}`} />
                  <span className="mt-1 w-px flex-1 bg-line" />
                </div>
                <details
                  className="group flex-1 rounded-2xl border border-line bg-panel/70 open:border-cyan/50"
                  open={i === 0}
                >
                  <summary className="details-marker-hidden flex cursor-pointer items-center gap-4 p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 text-cyan">
                      <Icon name={f.icon} size={18} />
                    </span>
                    <span className="flex-1 font-bold">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-lg leading-none">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 pl-[4.75rem] text-body">{entry?.a}</p>
                </details>
              </div>
            )
          })}
        </div>

        <div className="hatch-on-gradient-soft mt-8 flex items-center justify-center gap-3 text-sm text-muted">
          <Icon name="question" size={16} className="text-gold" />
          Still have questions?
          <span className="text-line">|</span>
          <a href="#" className="font-bold text-gold hover:underline">
            Contact us →
          </a>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta">
        <CtaCard
          videoSrc={joinVideo}
          imageAlt="A HATCH participant"
          kicker="Join Us"
          title="Your idea deserves more than a notebook."
          description="Some ideas stay as sketches. Others become companies. HATCH gives you the opportunity to build, validate, and present your idea to the world."
          buttonText="Register Now →"
          buttonTo="/join"
        />
      </Section>
    </div>
  )
}
