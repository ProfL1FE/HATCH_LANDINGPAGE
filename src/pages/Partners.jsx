import Section, { SectionHeading } from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { PARTNER_TYPES } from '../data/hatch'

export default function Partners() {
  return (
    <>
      <Section id="partners-hero" className="pt-16">
        <SectionHeading
          kicker="Partners"
          title="Build the ecosystem with us."
          lead="Universities, sponsors, and industry collaborators each play a distinct role in HATCH — from campus delivery to venture support."
        />
      </Section>

      <Section id="partner-types" className="bg-panel/40">
        <div className="grid gap-4 md:grid-cols-3">
          {PARTNER_TYPES.map((p) => (
            <Card key={p.title}>
              <div className="text-[42px]">{p.icon}</div>
              <h3 className="mb-2 mt-3 text-xl">{p.title}</h3>
              <p className="text-[#b9c9dd]">{p.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="campus-partner">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <SectionHeading
              title="For Official HATCH Campus Partners"
              lead="Universities get an organised participation system, stronger employability reporting, and structured industry engagement without having to run everything manually."
            />
            <Card>
              <h3 className="mb-3 text-xl">Campus partner process</h3>
              <ol className="space-y-2 pl-5 text-[#b9c9dd]">
                <li>Introductory meeting</li>
                <li>Campus partnership confirmation</li>
                <li>Appointment of campus coordinator</li>
                <li>Campus briefing and promotion</li>
                <li>Student registration</li>
                <li>Programme delivery</li>
                <li>Annual campus impact report</li>
              </ol>
              <Button to="/register" className="mt-4">Apply as JO1NUNI Partner</Button>
            </Card>
          </div>
          <Card>
            <h3 className="mb-3 text-xl">Campus dashboard preview</h3>
            <table className="w-full border-collapse overflow-hidden rounded-[18px]">
              <thead>
                <tr className="bg-white/7 text-[#e9f7ff]">
                  <th className="border-b border-line p-3.5 text-left">Metric</th>
                  <th className="border-b border-line p-3.5 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-[#c2d1e4]">
                {[
                  ['Registered Students', '248'],
                  ['Verified JO1NID', '211'],
                  ['Ideas Submitted', '76'],
                  ['Top 100 Shortlisted', '18'],
                  ['Employability Portfolio Completion', '84%'],
                ].map(([metric, value]) => (
                  <tr key={metric}>
                    <td className="border-b border-line p-3.5">{metric}</td>
                    <td className="border-b border-line p-3.5">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </Section>

      <Section id="become-partner" className="bg-panel/40">
        <div className="hatch-glass rounded-[34px] p-10 text-center">
          <h2 className="m-0 mb-3 text-[clamp(28px,4vw,44px)] tracking-[-1px]">Become a HATCH partner</h2>
          <p className="mx-auto mb-6 max-w-[560px] text-lg text-[#c6d5e8]">
            Whether you're a university, sponsor, or industry collaborator, JO1NBiz and JO1NUNI give you a direct
            line into the HATCH ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/register">Apply to Partner</Button>
            <Button to="/resources" variant="secondary">Download Partnership Brief</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
