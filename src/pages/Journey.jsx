import '../styles/jason-pages.css'
import {
  ArrowRight,
  Play,
  Check,
  UserPlus,
  Lightbulb,
  Users,
  Rocket,
  Star,
  Presentation,
  Trophy,
  Quote,
  Lock,
  Medal,
  Flag,
  Sparkles,
  Infinity as InfinityIcon,
} from 'lucide-react'
import { journey } from '../data/hatchPagesContent.js'
import { Reveal, SectionHead, StatBand, CtaBanner } from '../components/jason/Shared.jsx'
import MediaLoop from '../components/jason/MediaLoop.jsx'
import journeyPathImg from '../assets/jason/art/journey-path.webp'
import ctaJourneyImg from '../assets/jason/art/cta-journey.webp'

const stageIcons = [UserPlus, Lightbulb, Users, Rocket, Star, Presentation, Trophy]
const unlockIcons = [Check, Medal, Trophy]
const statIcons = [Flag, Medal, Sparkles, InfinityIcon]

// AI-generated scene images drop into src/assets/scenes/ as stage-1.png …
// stage-7.png (or .jpg/.webp) and are picked up automatically; until then
// each stage tile falls back to stylised gradient art with its icon.
const sceneImages = import.meta.glob('../assets/jason/scenes/stage-*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})
const sceneFor = (n) =>
  sceneImages[`../assets/jason/scenes/stage-${n}.png`] ||
  sceneImages[`../assets/jason/scenes/stage-${n}.jpg`] ||
  sceneImages[`../assets/jason/scenes/stage-${n}.jpeg`] ||
  sceneImages[`../assets/jason/scenes/stage-${n}.webp`]

// Label positions (percentages) matched to the glowing trail in the
// full-bleed hero image. Decorative — the stages below carry the real
// text content. Tuned for the current journey-path image; re-check
// these if the image is swapped for a different composition.
const pathMilestones = [
  { label: 'Register', x: 43, y: 85 },
  { label: 'Build Your Idea', x: 51, y: 72 },
  { label: 'Top 100', x: 57, y: 60 },
  { label: 'Development Sprint', x: 63, y: 49 },
  { label: 'Top 20', x: 69, y: 39 },
  { label: 'National Finals', x: 74, y: 28 },
  { label: 'Launchpad™', x: 75, y: 12, gold: true },
]

function JourneyHeroMedia() {
  return (
    <div className="hero-bleed">
      <img src={journeyPathImg} alt="" className="hero-bleed-content" />
      <div className="path-overlay">
        {pathMilestones.map((m) => (
          <div
            key={m.label}
            className={`path-node ${m.gold ? 'is-gold' : ''}`}
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
          >
            <span className="path-dot" /> {m.label}
          </div>
        ))}
      </div>
    </div>
  )
}

function ProgressCard() {
  const total = 7
  const done = 2
  const r = 55
  const c = 2 * Math.PI * r
  return (
    <div className="side-card glass">
      <h3>Your Progress</h3>
      <p className="side-card-sub">Track your journey and unlock new opportunities.</p>
      <div className="progress-ring-wrap">
        <svg viewBox="0 0 140 140" className="progress-ring" role="img" aria-label={`${done} of ${total} stages completed`}>
          <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(148,163,204,0.15)" strokeWidth="9" />
          <circle
            cx="70" cy="70" r={r} fill="none"
            stroke="url(#ringGrad)" strokeWidth="9" strokeLinecap="round"
            strokeDasharray={`${(done / total) * c} ${c}`}
            transform="rotate(-90 70 70)"
          />
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="140" y2="140">
              <stop stopColor="var(--gold-bright)" />
              <stop offset="1" stopColor="var(--gold-deep)" />
            </linearGradient>
          </defs>
          <text x="70" y="66" textAnchor="middle" className="ring-num">0{done}</text>
          <text x="70" y="86" textAnchor="middle" className="ring-sub">OF 0{total}</text>
        </svg>
      </div>
      <span className="ring-caption">Stages completed</span>
      <span className="ring-note">Keep going!</span>
      <span className="preview-chip">Preview — live tracking after JO1NID sign-in</span>
    </div>
  )
}

export default function Journey() {
  const stats = journey.stats.map((s, i) => ({ ...s, icon: statIcons[i] }))
  return (
    <div className="hatch-atmosphere-journey hatch-on-gradient">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero journey-hero">
        <JourneyHeroMedia />
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <span className="kicker">{journey.tag}</span>
            <h1 className="display">
              {journey.heroTitle[0]}
              <br />
              {journey.heroTitle[1]}
              <br />
              <span className="text-gold">{journey.heroTitle[2]}</span>
            </h1>
            <p className="hero-sub">{journey.heroSub}</p>
            <div className="hero-actions">
              <a href="#stages" className="btn btn-gold btn-lg">
                Start Your Journey <ArrowRight size={17} />
              </a>
              <a href="#" className="btn btn-ghost btn-lg">
                <Play size={15} /> Watch Video
              </a>
            </div>
            <div className="pathway-strip" aria-label="The HATCH pathway">
              {journey.pathway.map((p) => (
                <div className="pathway-chip" key={p.name}>
                  <strong>{p.name}</strong>
                  <span>{p.tagline}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="hero-visual" aria-hidden="true"></div>
        </div>
      </section>

      {/* ── Stages ───────────────────────────────────────────── */}
      <section className="section" id="stages">
        <div className="container journey-grid">
          <div>
            <SectionHead
              align="left"
              kicker="The HATCH Journey"
              title="A clear pathway from idea to impact"
              sub="Seven stages designed to transform ideas into real-world ventures. We walk with you every step."
            />
            <ol className="stage-list">
              {journey.stages.map((s, i) => {
                const Icon = stageIcons[i]
                const img = sceneFor(i + 1)
                return (
                  <Reveal as="li" className={`stage-row accent-${s.accent}`} key={s.num} delay={Math.min(i * 60, 240)}>
                    <div className="stage-num" aria-hidden="true">{s.num}</div>
                    <div className="stage-body">
                      <h3>{s.title}</h3>
                      <ul className="stage-points">
                        {s.points.map((p) => (
                          <li key={p}>
                            <Check size={13} aria-hidden="true" /> {p}
                          </li>
                        ))}
                      </ul>
                      {s.unlocks && <p className="stage-unlocks">Unlocks: {s.unlocks}</p>}
                    </div>
                    <ArrowRight size={17} className="stage-arrow" aria-hidden="true" />
                    <div className="stage-visual" aria-hidden="true">
                      {(() => {
                        const still = img ? (
                          <img src={img} alt="" loading="lazy" />
                        ) : (
                          <span className="stage-visual-fallback">
                            <Icon size={30} strokeWidth={1.5} />
                          </span>
                        )
                        // The finale stage gets its animated version when
                        // the video loop asset is present.
                        return i === 6 ? (
                          <MediaLoop name="finale" className="media-loop-tile" fallback={still} />
                        ) : (
                          still
                        )
                      })()}
                    </div>
                  </Reveal>
                )
              })}
            </ol>
          </div>
          <aside className="journey-side">
            <Reveal>
              <ProgressCard />
            </Reveal>
            <Reveal className="side-card glass quote-card" delay={100}>
              <Quote size={22} className="quote-mark" aria-hidden="true" />
              <blockquote>
                <p>“{journey.quote.text}”</p>
                <footer>— {journey.quote.author}</footer>
              </blockquote>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* ── Unlocks ──────────────────────────────────────────── */}
      <section className="section section-tight" id="unlocks">
        <div className="container">
          <SectionHead
            kicker="Progress Unlocks"
            title="Earn your way forward"
            sub="Every achievement is earned, verified and recorded — not given."
          />
          <div className="unlock-grid">
            {journey.unlockTiers.map((t, i) => {
              const Icon = unlockIcons[i]
              return (
                <Reveal className={`unlock-card glass accent-${t.accent}`} key={t.label} delay={i * 80}>
                  <div className="unlock-head">
                    <span className="unlock-icon"><Icon size={18} /></span>
                    <h3>{t.label}</h3>
                    {t.accent === 'gold' && <Lock size={14} className="unlock-lock" aria-hidden="true" />}
                  </div>
                  <ul>
                    {t.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Stats + CTA ──────────────────────────────────────── */}
      <section className="section section-tight">
        <div className="container">
          <StatBand stats={stats} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CtaBanner {...journey.cta} art={ctaJourneyImg} />
        </div>
      </section>
    </div>
  )
}
