import Section, { SectionHeading } from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import ScrollNav from '../components/ScrollNav'
import Icon from '../components/Icon'
import { STAGES, FAQ, HOME_SECTIONS, RECOGNITION, WHAT_IS_HATCH, AUDIENCES, WHY_JOIN, PARTNER_LOGOS } from '../data/hatch'
import heroBackground from '../assets/BACKGROUND.jpeg'

export default function Home() {
  return (
    <>
      <ScrollNav sections={HOME_SECTIONS} />

      {/* Hero — header + hero fill exactly one screen; next section appears on scroll */}
      {/* 75px = 74px header + its 1px bottom border */}
      <section id="discover" className="relative flex min-h-[calc(100svh-75px)] flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-bg">
          <img
            src={heroBackground}
            alt=""
            className="h-full w-full object-cover object-[70%_46%]"
          />
        </div>

        {/* Top: 40 / 60 split — left copy, right lets the egg breathe */}
        <div className="hatch-wrap-wide relative grid flex-1 items-start gap-8 pt-6 short:pt-4 xshort:pt-3 lg:grid-cols-[40%_60%]">
          <div className="max-w-[460px]">
            <h1 className="anim-rise font-serif m-0 mb-3 text-[clamp(39px,4.9vw,70px)] font-semibold leading-[1.08] tracking-[-0.5px] short:mb-3 short:text-[clamp(31px,3.6vw,44px)] xshort:text-[clamp(27px,3.1vw,37px)]">
              Every idea
              <br />
              has wonders.
              <br />
              <span className="bg-gradient-to-r from-[#d4a94b] via-gold to-[#ffe8a3] bg-clip-text text-transparent">
                HATCH
              </span>
              <sup className="text-[0.35em] text-[#c6d5e8]">™</sup> it.
            </h1>
            <div className="anim-rise mb-5 h-[3px] w-11 rounded-full bg-gradient-to-r from-[#b98a2e] to-gold short:mb-3.5 xshort:mb-2.5" style={{ animationDelay: '0.15s' }} />
            <p className="anim-rise mb-5 max-w-[440px] text-lg leading-relaxed text-[#c6d5e8] short:mb-4 short:max-w-[400px] short:text-base xshort:mb-2.5 xshort:text-[15px]" style={{ animationDelay: '0.2s' }}>
              HATCH is the human accelerator for talent, creativity and human potential. Where ideas are challenged,
              refined and transformed into real impact.
            </p>
            <div className="anim-rise flex flex-wrap items-center gap-5" style={{ animationDelay: '0.3s' }}>
              <Button to="/join" variant="gold" size="sm" className="uppercase tracking-[1.5px]">
                Start Your Journey →
              </Button>
              <a
                href="#video"
                className="group inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[1.5px] text-ink transition duration-300 hover:text-gold"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-[10px] transition duration-300 group-hover:border-gold group-hover:shadow-[0_0_14px_rgba(255,209,102,0.4)]">
                  ▶
                </span>
                Watch the Story
              </a>
            </div>
          </div>
          <div aria-hidden="true" />
        </div>
      </section>

      {/* What is HATCH */}
      <Section id="what-is-hatch">
        <SectionHeading
          kicker="What is HATCH"
          title="From idea to impact."
          lead="HATCH combines challenge, learning, selection, national recognition, venture development, and lifetime ecosystem access — built for students from every faculty, not only business students."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_IS_HATCH.map((w) => (
            <Card key={w.title} className="text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-cyan/20 to-violet/20 text-gold">
                <Icon name={w.icon} size={26} />
              </div>
              <h3 className="mb-1.5 text-lg">{w.title}</h3>
              <p className="text-[#b9c9dd]">{w.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Journey Preview */}
      <Section id="journey-preview" className="bg-panel/40">
        <SectionHeading
          kicker="The Pathway"
          title="One journey, four chapters."
          lead="Challenge → Discover your potential. Lab → Develop your potential. Summit → Showcase your potential. Circle → Continue your journey."
        />
        <div className="relative flex snap-x snap-mandatory gap-0 overflow-x-auto pb-4 pt-2">
          <div className="anim-line absolute left-[84px] right-[84px] top-[47px] hidden h-px bg-gradient-to-r from-cyan via-violet to-gold sm:block" />
          {STAGES.map((s, i) => (
            <div key={s.title} className="relative min-w-[168px] snap-start text-center">
              <div
                className={`relative z-10 mx-auto grid h-[78px] w-[78px] place-items-center rounded-[28px] border text-3xl ${i === 0
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
          lead="Students, professionals, and institutions each get a dedicated path into the ecosystem."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <Card key={a.title}>
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-cyan/20 to-violet/20 text-gold">
                <Icon name={a.icon} size={22} />
              </div>
              <h3 className="mb-2 text-xl">{a.title}</h3>
              <p className="mb-4 text-[#b9c9dd]">{a.desc}</p>
              <Button to={a.to} variant="secondary" size="sm">Learn More →</Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Join HATCH */}
      <Section id="why-join" className="bg-panel/40">
        <SectionHeading kicker="Why Join" title="Why join HATCH?" center />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {WHY_JOIN.map((w) => (
            <div key={w.label} className="flex flex-col items-center gap-2.5 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full border border-line bg-white/5 text-gold">
                <Icon name={w.icon} size={24} />
              </div>
              <span className="text-[13px] font-semibold leading-tight">{w.label}</span>
            </div>
          ))}
        </div>
      </Section>

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
          <Button to="/opportunities" variant="secondary">Explore all award tiers</Button>
        </div>
      </Section>

      {/* Video */}
      <Section id="video" className="bg-panel/40">
        <SectionHeading kicker="Watch" title="HATCH in 90 seconds." />
        <div className="hatch-glass grid aspect-video place-items-center rounded-[26px]">
          <div className="text-center">
            <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet text-2xl text-[#06101c]">
              ▶
            </div>
            <p className="text-muted">Watch video</p>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section id="success-stories">
        <SectionHeading kicker="Success Stories" title="Founders who started right here." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { tag: 'From Idea to Startup', name: 'Amira R.', role: 'HATCH 2026 Champion', quote: 'HATCH turned a class project into a funded venture — the Launchpad support was the real unlock.', icon: 'bulb' },
            { tag: 'Raised Funding', name: 'Team NeuroPath', role: 'HATCH 2026 Top 20', quote: 'The Development Sprint taught us more about customer validation than a full semester ever did.', icon: 'rocket' },
            { tag: 'Built a Real Company', name: 'Devan K.', role: 'HATCH 2026 Top 100', quote: 'Even without winning, the CareerBank portfolio and JO1NID record opened doors at internship interviews.', icon: 'briefcase' },
            { tag: 'Joined Top Accelerators', name: 'Team Solara', role: 'HATCH 2026 Finalist', quote: 'HIVE kept us connected to mentors and partners long after the finals ended.', icon: 'star' },
          ].map((s) => (
            <Card key={s.name}>
              <div className="mb-3 flex items-center gap-2 text-gold">
                <Icon name={s.icon} size={18} />
                <span className="text-[11px] font-bold uppercase tracking-[1.5px]">{s.tag}</span>
              </div>
              <p className="mb-4 text-[#b9c9dd]">&ldquo;{s.quote}&rdquo;</p>
              <b className="block">{s.name}</b>
              <small className="text-muted">{s.role}</small>
            </Card>
          ))}
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners" className="bg-panel/40">
        <SectionHeading kicker="Our Partners" title="Backed by universities and industry." center />
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {PARTNER_LOGOS.map((p) => (
            <span key={p} className="text-lg font-bold uppercase tracking-[1px] text-muted opacity-70 transition hover:text-ink hover:opacity-100">
              {p}
            </span>
          ))}
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section id="faq-preview">
        <SectionHeading kicker="FAQ" title="Quick answers before you start." center />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { q: 'Can I join alone?', icon: 'users' },
            { q: 'Do I need to study business?', icon: 'graduationCap' },
            { q: 'Who owns my idea?', icon: 'bulb' },
            { q: 'Can I use AI?', icon: 'brain' },
            { q: 'What do winners receive?', icon: 'star' },
          ].map((f) => {
            const entry = FAQ.find((item) => item.q === f.q)
            return (
              <details key={f.q} className="details-marker-hidden rounded-[18px] border border-line bg-white/5 p-4 text-center">
                <summary className="flex cursor-pointer list-none flex-col items-center gap-2.5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-gold">
                    <Icon name={f.icon} size={20} />
                  </span>
                  <span className="text-[13px] font-bold leading-snug">{f.q}</span>
                </summary>
                <p className="mt-3 text-left text-sm text-[#b9c9dd]">{entry?.a}</p>
              </details>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta">
        <div className="hatch-glass rounded-[34px] p-10 text-center">
          <h2 className="m-0 mb-3 text-[clamp(28px,4vw,44px)] tracking-[-1px]">Your idea deserves more than a notebook.</h2>
          <p className="mx-auto mb-6 max-w-[560px] text-lg text-[#c6d5e8]">
            Some ideas stay as sketches. Others become companies. HATCH gives you the opportunity to build, validate,
            and present your idea to the world.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/join" variant="gradient">Register Now</Button>
            <Button to="/journey" variant="secondary">Explore the Journey</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
