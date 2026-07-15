import { useState } from 'react'
import Section, { SectionHeading } from '../components/Section'
import Card from '../components/Card'
import { STAGES } from '../data/hatch'

const PATH_STATS = [
  { value: '1', label: 'Registration' },
  { value: '9', label: 'Milestones' },
  { value: '100+', label: 'Learning hours potential' },
  { value: '∞', label: 'CareerBank lifetime network' },
]

export default function Journey() {
  const [active, setActive] = useState(0)
  const stage = STAGES[active]

  return (
    <>
      <Section id="journey-hero" className="pt-16">
        <SectionHeading
          kicker="Journey"
          title="The HATCH pathway"
          lead="A clickable progression map: Challenge → Discover your potential. Lab → Develop your potential. Summit → Showcase your potential. Circle → Continue your journey."
        />

        <div className="hatch-glass rounded-[30px] p-[22px]">
          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PATH_STATS.map((s) => (
              <div key={s.label} className="rounded-[18px] border border-line bg-white/5 p-4">
                <b className="text-2xl">{s.value}</b>
                <br />
                <span className="text-muted">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto px-0.5 pb-6 pt-3.5">
            {STAGES.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className="relative min-w-[168px] shrink-0 snap-start text-center"
              >
                <div
                  className={`relative z-10 mx-auto grid h-[78px] w-[78px] place-items-center rounded-[28px] border text-3xl transition ${
                    i === active
                      ? 'border-transparent bg-gradient-to-br from-cyan to-violet text-[#06101c] shadow-[0_0_55px_rgba(110,231,255,0.38)]'
                      : 'border-cyan/50 bg-[#0b1422] shadow-[0_0_35px_rgba(110,231,255,0.12)]'
                  }`}
                >
                  {s.icon}
                </div>
                <b className="mt-3 block">{s.title}</b>
                <small className="text-muted">{s.tag}</small>
              </button>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-[.85fr_1.15fr]">
            <div className="rounded-[20px] border border-green/25 bg-green/7 p-[18px]">
              <span className="mb-2 inline-block rounded-full bg-cyan/15 px-2.5 py-1 text-xs font-bold text-cyan">
                {stage.phase}
              </span>
              <h3 className="mt-2 text-xl">{stage.title}</h3>
              <p className="text-[#b9c9dd]">{stage.desc}</p>
              <p className="mt-3">
                <span className="font-extrabold text-green">Unlocked:</span>{' '}
                <span className="text-[#b9c9dd]">{stage.unlock}</span>
              </p>
            </div>
            <Card>
              <h3 className="mb-3 text-xl">Progress unlocks</h3>
              <table className="w-full border-collapse overflow-hidden rounded-[18px]">
                <thead>
                  <tr className="bg-white/7 text-[#e9f7ff]">
                    <th className="border-b border-line p-3.5 text-left">Status</th>
                    <th className="border-b border-line p-3.5 text-left">Achievement</th>
                  </tr>
                </thead>
                <tbody className="text-[#c2d1e4]">
                  <tr>
                    <td className="border-b border-line p-3.5 font-bold text-green">Available</td>
                    <td className="border-b border-line p-3.5">Register, download brief, create profile</td>
                  </tr>
                  <tr>
                    <td className="border-b border-line p-3.5 font-bold text-gold">Selection-based</td>
                    <td className="border-b border-line p-3.5">Top 100, Top 20, National Finals</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-gold">Winner only</td>
                    <td className="p-3.5">HATCH Venture of the Year™ and 12-Month Launchpad™</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
