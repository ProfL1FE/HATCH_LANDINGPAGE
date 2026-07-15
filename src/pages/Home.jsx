import Section, { SectionHeading } from '../components/Section'
import Badge from '../components/Badge'
import Card from '../components/Card'
import Button from '../components/Button'
import { STAGES, FAQ, HERO_STATS, ECOSYSTEM_NODES, RECOGNITION } from '../data/hatch'
import heroEgg from '../assets/hero-egg.jpg'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden pb-12 pt-[74px]">
        <div className="hatch-wrap">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
            <div>
              <h1 className="m-0 mb-5 text-[clamp(42px,6.4vw,72px)] leading-[1.02] tracking-[-2.5px]">
                Every idea has wonders.
                <br />
                <span className="bg-gradient-to-r from-gold to-[#ffe8a3] bg-clip-text text-transparent">HATCH</span>
                <sup className="text-[0.4em]">™</sup> it.
              </h1>
              <p className="mb-7 max-w-[560px] text-lg text-[#c6d5e8]">
                HATCH is the human accelerator for talent, creativity and human potential. Where ideas are
                challenged, refined, and transformed into real impact.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Button to="/register" variant="gold">Start Your Journey →</Button>
                <a href="#video" className="inline-flex items-center gap-2.5 font-bold text-ink hover:text-gold">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-line">▶</span>
                  Watch the Story
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[380px] px-[14%] py-6 sm:px-[16%]" aria-label="HATCH ecosystem visual">
              <p className="mb-4 text-center text-xs font-bold uppercase tracking-[4px] text-muted">
                One idea. Limitless possibilities.
              </p>
              <div className="relative">
                <img
                  src={heroEgg}
                  alt="HATCH — a cracked, glowing egg symbolising an idea ready to hatch"
                  className="w-full rounded-[28px] shadow-hatch"
                />
                {ECOSYSTEM_NODES.map((n) => (
                  <div
                    key={n.label}
                    className={`absolute flex w-max max-w-[150px] items-center gap-2 rounded-2xl border border-white/18 bg-panel/90 p-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-md ${n.pos}`}
                  >
                    <span className="text-lg">{n.icon}</span>
                    <span>
                      <b className="block text-xs leading-tight">{n.label}</b>
                      <small className="text-[10px] leading-tight text-muted">{n.sub}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="hatch-panel flex items-center gap-3 p-4">
                <span className="text-2xl">{s.icon}</span>
                <span>
                  <b className="block text-xl">{s.value}</b>
                  <span className="text-xs uppercase tracking-wide text-muted">{s.label}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Mini journey strip + opportunities card */}
          <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_.36fr]">
            <div className="hatch-panel p-6">
              <p className="text-center text-xs font-bold uppercase tracking-[3px] text-muted">The HATCH Journey</p>
              <p className="mb-5 text-center text-sm text-muted">From idea to impact. We walk with you every step.</p>
              <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto">
                {STAGES.slice(0, 7).map((s, i) => (
                  <div key={s.title} className="relative min-w-[120px] shrink-0 snap-start text-center">
                    <div
                      className={`relative z-10 mx-auto grid h-[52px] w-[52px] place-items-center rounded-2xl border text-xl ${
                        i === 6
                          ? 'border-transparent bg-gradient-to-br from-gold to-[#ffe8a3] text-[#06101c] shadow-[0_0_35px_rgba(255,209,102,0.4)]'
                          : 'border-cyan/40 bg-[#0b1422]'
                      }`}
                    >
                      {s.icon}
                    </div>
                    <b className="mt-2 block text-xs">{s.title}</b>
                    <small className="text-[11px] text-muted">{s.tag}</small>
                  </div>
                ))}
              </div>
            </div>
            <Card className="flex flex-col justify-between gap-4">
              <div>
                <h3 className="mb-2 text-lg">Limitless opportunities await you</h3>
                <p className="text-sm text-[#b9c9dd]">Join a national ecosystem that believes in your potential.</p>
              </div>
              <Button to="/challenge" variant="secondary" className="w-full">Explore Opportunities →</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* What is HATCH */}
      <Section id="what-is-hatch">
        <SectionHeading
          kicker="What is HATCH"
          title="More than a competition."
          lead="HATCH combines challenge, learning, selection, national recognition, venture development, and lifetime ecosystem access — built for students from every faculty, not only business students."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="mb-2 text-xl">Build beyond your degree</h3>
            <p className="text-[#b9c9dd]">
              Create a CareerBank profile, JO1NID digital identity, VERI5 record, digital certificate, and
              achievement portfolio.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl">Develop real skills</h3>
            <p className="text-[#b9c9dd]">
              Learn AI application, entrepreneurship, customer discovery, business model thinking, pitching,
              leadership, and personal branding.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl">Earn national visibility</h3>
            <p className="text-[#b9c9dd]">
              Progress through Top 100, Top 20, National Finals, HATCH Venture of the Year™, Launchpad™, and HIVE™.
            </p>
          </Card>
        </div>
      </Section>

      {/* Journey Preview */}
      <Section id="journey-preview" className="bg-panel/40">
        <SectionHeading
          kicker="The Pathway"
          title="One journey, four chapters."
          lead="Challenge → Discover your potential. Lab → Develop your potential. Summit → Showcase your potential. Circle → Continue your journey."
        />
        <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto pb-4 pt-2">
          {STAGES.map((s, i) => (
            <div key={s.title} className="relative min-w-[168px] snap-start text-center">
              <div
                className={`relative z-10 mx-auto grid h-[78px] w-[78px] place-items-center rounded-[28px] border text-3xl ${
                  i === 0
                    ? 'border-transparent bg-gradient-to-br from-cyan to-violet text-[#06101c] shadow-[0_0_55px_rgba(110,231,255,0.38)]'
                    : 'border-cyan/50 bg-[#0b1422] shadow-[0_0_35px_rgba(110,231,255,0.12)]'
                }`}
              >
                {s.icon}
              </div>
              <b className="mt-3 block">{s.title}</b>
              <small className="text-muted">{s.tag}</small>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button to="/journey" variant="secondary">See the full interactive journey</Button>
        </div>
      </Section>

      {/* Built for Everyone */}
      <Section id="built-for-everyone">
        <SectionHeading
          kicker="Built for Everyone"
          title="Wherever you fit, HATCH has a lane."
          lead="Students, universities, and industry partners each get a dedicated access route into the ecosystem."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <Badge>JO1NID</Badge>
            <h3 className="mb-2 mt-3 text-xl">For Students</h3>
            <p className="text-[#b9c9dd]">Register individually or as a team, submit your idea, and build a lifetime CareerBank profile.</p>
          </Card>
          <Card>
            <Badge variant="gold">JO1NUNI</Badge>
            <h3 className="mb-2 mt-3 text-xl">For Universities</h3>
            <p className="text-[#b9c9dd]">Get campus dashboards, briefing materials, and annual impact reporting with minimal admin burden.</p>
          </Card>
          <Card>
            <Badge>JO1NBiz</Badge>
            <h3 className="mb-2 mt-3 text-xl">For Partners</h3>
            <p className="text-[#b9c9dd]">Sponsors and industry collaborators connect with finalist teams and emerging student ventures.</p>
          </Card>
        </div>
      </Section>

      {/* Recognition */}
      <Section id="recognition" className="bg-panel/40">
        <SectionHeading kicker="Recognition" title="Earned progression, not just prizes." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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
      <Section id="video">
        <SectionHeading kicker="Watch" title="See HATCH in motion." />
        <div className="hatch-glass grid aspect-video place-items-center rounded-[26px]">
          <div className="text-center">
            <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet text-2xl text-[#06101c]">
              ▶
            </div>
            <p className="text-muted">HATCH™ 2027 Official Trailer</p>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section id="success-stories" className="bg-panel/40">
        <SectionHeading kicker="Success Stories" title="Founders who started right here." />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: 'Amira R.', role: 'HATCH 2026 Champion', quote: 'HATCH turned a class project into a funded venture — the Launchpad support was the real unlock.' },
            { name: 'Team NeuroPath', role: 'HATCH 2026 Top 20', quote: 'The Development Sprint taught us more about customer validation than a full semester ever did.' },
            { name: 'Devan K.', role: 'HATCH 2026 Top 100', quote: 'Even without winning, the CareerBank portfolio and JO1NID record opened doors at internship interviews.' },
          ].map((s) => (
            <Card key={s.name}>
              <p className="mb-4 text-[#b9c9dd]">&ldquo;{s.quote}&rdquo;</p>
              <b className="block">{s.name}</b>
              <small className="text-muted">{s.role}</small>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section id="faq-preview">
        <SectionHeading kicker="FAQ" title="Quick answers before you start." />
        <div className="space-y-2.5">
          {FAQ.slice(0, 3).map((f) => (
            <details key={f.q} className="details-marker-hidden rounded-[18px] border border-line bg-white/5 p-4">
              <summary className="cursor-pointer font-bold">{f.q}</summary>
              <p className="mt-2 text-[#b9c9dd]">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta">
        <div className="hatch-glass rounded-[34px] p-10 text-center">
          <h2 className="m-0 mb-3 text-[clamp(28px,4vw,44px)] tracking-[-1px]">Ready to hatch your idea?</h2>
          <p className="mx-auto mb-6 max-w-[560px] text-lg text-[#c6d5e8]">
            Registration takes minutes. Your CareerBank profile and JO1NID stay with you for life.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/register">Register Now</Button>
            <Button to="/challenge" variant="secondary">Read the Challenge Brief</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
