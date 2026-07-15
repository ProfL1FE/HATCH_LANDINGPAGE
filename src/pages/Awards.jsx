import Section, { SectionHeading } from '../components/Section'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { AWARDS } from '../data/hatch'

const HIVE = {
  icon: '🌍',
  badge: 'HIVE™',
  title: 'Lifetime Founder Network',
  perks: [
    'HIVE™ Founder Membership',
    'CareerBank Lifetime Network access',
    'Ongoing peer and mentor community',
    'Alumni showcase opportunities',
    'Early access to future HATCH cycles',
  ],
}

export default function Awards() {
  return (
    <>
      <Section id="awards-hero" className="pt-16">
        <SectionHeading
          kicker="Awards"
          title="What you'll earn"
          lead="This is framed as earned progression, not just prizes. Trophy and certificate recognition are built into every award tier."
        />
      </Section>

      <Section id="award-tiers" className="bg-panel/40">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {AWARDS.map((a) => (
            <Card key={a.title} highlight={a.accentBorder} className="relative overflow-hidden">
              <div className="text-[42px]">{a.icon}</div>
              <Badge variant={a.badgeVariant || 'green'}>{a.badge}</Badge>
              <h3 className="mb-2 mt-3 text-xl">{a.title}</h3>
              <ul className="space-y-1.5 pl-4 text-[#b9c9dd]">
                {a.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="launchpad">
        <SectionHeading
          kicker="Launchpad™"
          title="12 months of venture development."
          lead="The Champion venture enters a 12-month journey valued at approximately USD30,000 in founder development support — not a cash prize, but a real runway."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="mb-2 text-xl">Validation &amp; branding</h3>
            <p className="text-[#b9c9dd]">Business validation clinics, brand strategy, and positioning support.</p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl">Legal, IP &amp; accounting</h3>
            <p className="text-[#b9c9dd]">Access to legal/IP clinics and accounting guidance for early-stage founders.</p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl">Corporate introductions</h3>
            <p className="text-[#b9c9dd]">Direct introductions to CareerBank's industry and sponsor network.</p>
          </Card>
        </div>
      </Section>

      <Section id="hive" className="bg-panel/40">
        <SectionHeading kicker="HIVE™" title="Your journey doesn't end at Launchpad." />
        <Card className="border-cyan/45">
          <div className="text-[42px]">{HIVE.icon}</div>
          <Badge>{HIVE.badge}</Badge>
          <h3 className="mb-2 mt-3 text-xl">{HIVE.title}</h3>
          <ul className="grid gap-1.5 pl-4 text-[#b9c9dd] sm:grid-cols-2">
            {HIVE.perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </Card>
      </Section>
    </>
  )
}
