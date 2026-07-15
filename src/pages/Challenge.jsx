import Section, { SectionHeading } from '../components/Section'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { ELIGIBILITY, TIMELINE, RULES, PACKAGES } from '../data/hatch'

export default function Challenge() {
  return (
    <>
      <Section id="overview" className="pt-16">
        <SectionHeading
          kicker="The Challenge"
          title="Submit a real AI for Humanity solution."
          lead="Teams identify a genuine real-world problem and build an AI-powered solution, then progress through a structured national pathway — from registration to the National Finals."
        />
        <div className="flex flex-wrap gap-3">
          <Button to="/register">Start Registration</Button>
          <Button to="/resources" variant="secondary">Download Student Brief</Button>
        </div>
      </Section>

      <Section id="eligibility" className="bg-panel/40">
        <SectionHeading kicker="Eligibility" title="Who can enter?" />
        <Card>
          <ul className="grid gap-3 pl-5 text-[#b9c9dd] sm:grid-cols-2">
            {ELIGIBILITY.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section id="timeline">
        <SectionHeading kicker="Timeline" title="Key dates for the 2027 cycle." />
        <div className="space-y-3">
          {TIMELINE.map((t, i) => (
            <div key={t.label} className="hatch-panel flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:gap-6">
              <Badge className="w-max shrink-0">{t.date}</Badge>
              <div>
                <b className="block">{t.label}</b>
                <span className="text-[#b9c9dd]">{t.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="rules" className="bg-panel/40">
        <SectionHeading kicker="Rules" title="What every participant agrees to." />
        <Card>
          <ol className="grid gap-3 pl-5 text-[#b9c9dd]">
            {RULES.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
        </Card>
      </Section>

      <Section id="submission">
        <SectionHeading
          kicker="Submission"
          title="How you submit your idea."
          lead="Once registered with a JO1NID, teams submit their solution through the CareerBank platform — including problem statement, AI approach, and a short pitch summary."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <b className="text-cyan">Step 1</b>
            <h3 className="mb-2 mt-2 text-xl">Register &amp; verify</h3>
            <p className="text-[#b9c9dd]">Create your JO1NID and complete VERI5 verification.</p>
          </Card>
          <Card>
            <b className="text-cyan">Step 2</b>
            <h3 className="mb-2 mt-2 text-xl">Submit your idea</h3>
            <p className="text-[#b9c9dd]">Describe the problem, your AI-powered solution, and disclose AI tool usage.</p>
          </Card>
          <Card>
            <b className="text-cyan">Step 3</b>
            <h3 className="mb-2 mt-2 text-xl">Await shortlisting</h3>
            <p className="text-[#b9c9dd]">Judges review submissions to select the Top 100 for the Development Sprint.</p>
          </Card>
        </div>
      </Section>

      <Section id="packages" className="bg-panel/40">
        <SectionHeading
          kicker="Packages"
          title="Registration packages"
          lead="Campus Partner students receive a 10% preferred rate."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <Card key={p.name} highlight={p.highlight}>
              <Badge>{p.badge}</Badge>
              <h3 className="mb-1 mt-3 text-xl">{p.name}</h3>
              <div className="my-2 text-[42px] font-black">USD{p.price}</div>
              <p className="text-[#b9c9dd]">{p.desc}</p>
              <ul className="my-3.5 space-y-1.5 pl-4 text-[#b9c9dd]">
                {p.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <Button to="/register" className="w-full">{p.cta}</Button>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
