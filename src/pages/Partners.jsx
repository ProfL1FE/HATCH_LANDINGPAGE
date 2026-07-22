import '../styles/jason-pages.css'
import {
  ArrowRight,
  Check,
  GraduationCap,
  Handshake,
  Factory,
  Landmark,
  Fingerprint,
  Briefcase,
  Building2,
  BadgeCheck,
  Rocket,
  Users,
  Globe,
} from 'lucide-react'
import { partners } from '../data/hatchPagesContent.js'
import { Reveal, SectionHead, StatBand, CtaBanner } from '../components/jason/Shared.jsx'
import { EggMark } from '../components/jason/Logo.jsx'
import earthImg from '../assets/jason/art/earth.webp'
import cityGoldImg from '../assets/jason/art/city-gold.webp'
import cityBlueImg from '../assets/jason/art/city-blue.webp'
import cityTealImg from '../assets/jason/art/city-teal.webp'
import ctaPartnersImg from '../assets/jason/art/cta-partners.webp'

const audienceIcons = { universities: GraduationCap, sponsors: Handshake, industry: Factory }
const audienceScenes = { universities: cityGoldImg, sponsors: cityBlueImg, industry: cityTealImg }
const ecosystemIcons = [Fingerprint, Briefcase, Building2, Landmark, BadgeCheck, Rocket, Users]
const impactIcons = [Landmark, Users, Handshake, Globe]

function EcosystemOrbit() {
  const items = partners.ecosystem
  return (
    <div className="orbit-wrap" role="img" aria-label={`The HATCH ecosystem: ${items.map((i) => i.name).join(', ')}`}>
      <div className="orbit-ring" aria-hidden="true" />
      <div className="orbit-ring orbit-ring-2" aria-hidden="true" />
      <svg className="orbit-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {items.map((_, i) => {
          const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2
          const x = 50 + 44 * Math.cos(angle)
          const y = 50 + 44 * Math.sin(angle)
          return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="rgba(61, 214, 227, 0.5)" strokeWidth="0.6" strokeDasharray="1.5 1.6" />
        })}
      </svg>
      <div className="orbit-center glass">
        <EggMark size={34} />
        <strong>HATCH™</strong>
        <span>AI for Humanity</span>
      </div>
      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2
        const x = 50 + 44 * Math.cos(angle)
        const y = 50 + 44 * Math.sin(angle)
        const Icon = ecosystemIcons[i]
        return (
          <div
            className={`orbit-node accent-${item.accent}`}
            key={item.name}
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="orbit-node-icon"><Icon size={18} strokeWidth={1.7} /></span>
            <strong>{item.name}</strong>
            <em>{item.desc}</em>
          </div>
        )
      })}
    </div>
  )
}

export default function Partners() {
  const impact = partners.impact.map((s, i) => ({ ...s, icon: impactIcons[i] }))
  return (
    <div className="hatch-atmosphere-partners hatch-on-gradient">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero partners-hero">
        <div className="hero-bleed">
          <img src={earthImg} alt="" className="hero-bleed-content" loading="eager" />
        </div>
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <span className="kicker">{partners.tag}</span>
            <h1 className="display">
              {partners.heroTitle[0]}
              <br />
              <span className="hatch-gradient-heading">{partners.heroTitle[1]}</span>
            </h1>
            <p className="hero-sub">{partners.heroSub}</p>
          </Reveal>
          <div className="hero-visual" aria-hidden="true"></div>
        </div>
      </section>

      {/* ── Audience cards ───────────────────────────────────── */}
      <section className="section section-tight">
        <div className="container">
          <div className="audience-grid">
            {partners.audiences.map((a, i) => {
              const Icon = audienceIcons[a.id]
              return (
                <Reveal
                  className={`audience-card glass accent-${a.accent} has-scene-bg`}
                  key={a.id}
                  delay={i * 80}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(7,10,22,0.92) 30%, rgba(7,10,22,0.55) 100%), url(${audienceScenes[a.id]})`,
                  }}
                >
                  <span className="audience-icon"><Icon size={24} strokeWidth={1.7} /></span>
                  <h2>{a.name}</h2>
                  <p>{a.lead}</p>
                  <ul>
                    {a.points.map((p) => (
                      <li key={p}>
                        <Check size={13} aria-hidden="true" /> {p}
                      </li>
                    ))}
                  </ul>
                  <a href={a.link} className="audience-link">
                    {a.linkLabel} <ArrowRight size={14} />
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Ecosystem orbit ──────────────────────────────────── */}
      <section className="section" id="ecosystem">
        <div className="container">
          <SectionHead
            kicker="The HATCH Ecosystem"
            title="An interconnected network built for impact"
            sub="One identity, one profile, one verified record — connected across every HATCH platform."
          />
          <Reveal>
            <EcosystemOrbit />
          </Reveal>
        </div>
      </section>

      {/* ── Campus Partner Programme ─────────────────────────── */}
      <section className="section section-tight" id="campus">
        <div className="container">
          <SectionHead
            kicker="For Universities"
            title={partners.campus.title}
            sub={partners.campus.lead}
          />
          <div className="campus-grid">
            <Reveal className="campus-process glass">
              <h3>Campus Partner Process</h3>
              <ol>
                {partners.campus.process.map((step, i) => (
                  <li key={step}>
                    <span className="step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal className="campus-dash glass" delay={100}>
              <div className="campus-dash-head">
                <h3>Campus Dashboard Preview</h3>
                <span className="preview-chip">Sample data</span>
              </div>
              <table className="dash-table">
                <thead>
                  <tr>
                    <th scope="col">Metric</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {partners.campus.dashboard.map((d) => (
                    <tr key={d.metric}>
                      <th scope="row">{d.metric}</th>
                      <td>{d.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a href="#become-partner" className="btn btn-gold campus-apply">
                Apply as JO1NUNI™ Partner <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Impact + strategic partners ──────────────────────── */}
      <section className="section section-tight">
        <div className="container">
          <SectionHead kicker="Our Impact Together" title="A growing national movement" />
          <StatBand stats={impact} />
          <Reveal className="strategic-strip">
            <span className="strategic-label">Strategic Partners</span>
            {partners.strategic.map((s) => (
              <span className="strategic-name" key={s}>{s}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section" id="become-partner">
        <div className="container">
          <CtaBanner {...partners.cta} art={ctaPartnersImg} />
        </div>
      </section>
    </div>
  )
}
