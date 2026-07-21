import '../styles/jason-pages.css'
import { Check, Minus } from 'lucide-react'
import { awards } from '../data/hatchPagesContent.js'
import { Reveal, SectionHead, CtaBanner } from '../components/jason/Shared.jsx'
import MediaLoop from '../components/jason/MediaLoop.jsx'
import trophyHeroImg from '../assets/jason/art/trophy-hero.webp'
import tierChampionImg from '../assets/jason/art/tier-champion.webp'
import tierTop20Img from '../assets/jason/art/tier-top20.webp'
import tierTop100Img from '../assets/jason/art/tier-top100.webp'
import tierParticipantImg from '../assets/jason/art/tier-participant.webp'
import ctaAwardsImg from '../assets/jason/art/cta-awards.webp'

// Tier object renders (glowing egg, crystal star, team, solo) generated to
// match the approved mockup. The wide banners keep their subject on the
// left, so panels crop with object-position: left.
const tierArtImg = {
  champion: tierChampionImg,
  top20: tierTop20Img,
  top100: tierTop100Img,
  participant: tierParticipantImg,
}

function CheckCell({ value, tone }) {
  if (value === 'gold') {
    return (
      <span className="check-gold" title="Gold VERI5™ Verified Achievement">
        <Check size={15} aria-hidden="true" /> Gold
      </span>
    )
  }
  if (value) return <Check size={16} className={`check-yes tone-${tone}`} aria-label="Included" />
  return <Minus size={14} className="check-no" aria-label="Not included" />
}

const columnTones = ['gold', 'purple', 'blue', 'ink']

export default function Awards() {
  return (
    <div className="hatch-atmosphere-awards hatch-on-gradient">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero awards-hero">
        <div className="hero-bleed">
          <MediaLoop
            name="trophy"
            className="hero-bleed-content"
            fallback={<img src={trophyHeroImg} alt="" className="hero-bleed-content" loading="eager" />}
          />
        </div>
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <span className="kicker">{awards.tag}</span>
            <h1 className="display">
              {awards.heroTitle[0]}
              <br />
              <span className="text-gold">{awards.heroTitle[1]}</span>
            </h1>
            <p className="hero-sub">{awards.heroSub}</p>
          </Reveal>
          <div className="hero-visual" aria-hidden="true"></div>
        </div>
      </section>

      {/* ── Tier cards ───────────────────────────────────────── */}
      <section className="section section-tight" id="tiers">
        <div className="container">
          <div className="tier-stack">
            {awards.tiers.map((t, i) => {
              return (
                <Reveal className={`tier-card glass accent-${t.accent}`} key={t.id} delay={Math.min(i * 70, 210)}>
                  <div className="tier-panel" aria-hidden="true">
                    <img src={tierArtImg[t.id]} alt="" className="tier-panel-img" loading="lazy" />
                  </div>
                  <div className="tier-info">
                    <div className="tier-title-row">
                      <h2>{t.name}</h2>
                      {t.badge && <span className="tier-badge">{t.badge}</span>}
                    </div>
                    <p className="tier-subtitle">{t.subtitle}</p>
                  </div>
                  <ul className="tier-benefits">
                    {t.benefits.map((b) => (
                      <li key={b}>
                        <Check size={13} aria-hidden="true" /> {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────── */}
      <section className="section" id="compare">
        <div className="container">
          <SectionHead
            kicker="Awards & Benefits Comparison"
            title="What each level earns"
            sub="Framed as earned progression — every tier builds on the one before it."
          />
          <Reveal className="table-wrap glass">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Benefits</th>
                  {awards.comparison.columns.map((c, i) => (
                    <th scope="col" key={c} className={`col-head tone-${columnTones[i]}`}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {awards.comparison.rows.map((r) => (
                  <tr key={r.benefit}>
                    <th scope="row">{r.benefit}</th>
                    {r.checks.map((v, i) => (
                      <td key={i} className={i === 0 ? 'col-champion' : ''}>
                        <CheckCell value={v} tone={columnTones[i]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ── Success stories ──────────────────────────────────── */}
      <section className="section section-tight" id="stories">
        <div className="container">
          <SectionHead
            kicker="Success Stories"
            title="Real people. Real impact."
            sub="Sample stories for the prototype — real participant stories arrive with the first cohort."
          />
          <div className="story-grid">
            {awards.stories.map((s, i) => (
              <Reveal className="story-card glass" key={s.name} delay={i * 80}>
                <p className="story-quote">“{s.quote}”</p>
                <div className="story-person">
                  <span className="story-avatar" aria-hidden="true">
                    {s.name.split(' ').map((w) => w[0]).join('')}
                  </span>
                  <span>
                    <strong>{s.name}</strong>
                    <em>{s.role}</em>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <CtaBanner {...awards.cta} art={ctaAwardsImg} />
        </div>
      </section>
    </div>
  )
}
