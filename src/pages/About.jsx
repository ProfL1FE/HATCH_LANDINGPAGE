import Section, { SectionHeading } from '../components/Section'
import Card from '../components/Card'
import Pill from '../components/Pill'

export default function About() {
  return (
    <>
      <Section id="about-hero" className="pt-16">
        <div className="mb-5 flex flex-wrap gap-2">
          <Pill>About HATCH™</Pill>
        </div>
        <SectionHeading
          title="Talent discovery, built for the AI era."
          lead="HATCH™ is CareerBank's flagship programme for surfacing student talent and turning ideas into real, supported ventures — powered by AI, entrepreneurship, and a national partner network."
        />
      </Section>

      <Section id="mission-vision" className="bg-panel/40">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="mb-2 text-xl">Our Mission</h3>
            <p className="text-[#b9c9dd]">
              To discover, develop, and champion student talent across every faculty — giving them the tools,
              recognition, and network to turn ideas into ventures that matter.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl">Our Vision</h3>
            <p className="text-[#b9c9dd]">
              A generation of founders equipped to use AI for humanity — building solutions to real problems,
              supported by a lifetime CareerBank ecosystem rather than a single competition moment.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="history">
        <SectionHeading kicker="History" title="From idea to national programme." />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <b className="text-cyan">Origin</b>
            <p className="mt-2 text-[#b9c9dd]">
              HATCH began as a CareerBank initiative to close the gap between academic transcripts and real-world
              employability and founder readiness.
            </p>
          </Card>
          <Card>
            <b className="text-cyan">Growth</b>
            <p className="mt-2 text-[#b9c9dd]">
              Expanded from a single-campus pilot into a national challenge spanning universities, colleges, and
              TVET institutions across every faculty.
            </p>
          </Card>
          <Card>
            <b className="text-cyan">2027 Cycle</b>
            <p className="mt-2 text-[#b9c9dd]">
              This cycle centres on "AI for Humanity" — encouraging responsible AI-powered solutions to genuine
              human and community problems.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="why-ai" className="bg-panel/40">
        <SectionHeading
          kicker="Why AI for Humanity"
          title="AI should serve people, not replace purpose."
          lead="We anchor HATCH around responsible AI application because it is the defining skill of this generation of founders — and because used well, it multiplies human impact rather than diminishing it."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="mb-2 text-xl">Responsible by design</h3>
            <p className="text-[#b9c9dd]">Participants disclose significant AI tool usage — transparency is part of the submission, not an afterthought.</p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl">Impact-first problems</h3>
            <p className="text-[#b9c9dd]">Solutions are judged on the real-world human problem they address, with AI as the enabling tool.</p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl">Skills for the future</h3>
            <p className="text-[#b9c9dd]">Masterclasses and bootcamps build practical AI fluency alongside entrepreneurship fundamentals.</p>
          </Card>
        </div>
      </Section>

      <Section id="careerbank-ecosystem">
        <SectionHeading
          kicker="The CareerBank Ecosystem"
          title="HATCH is one entry point into a lifetime network."
          lead="Every participant carries their JO1NID, VERI5 verification, and CareerBank profile beyond HATCH — into internships, jobs, and future ventures."
        />
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <b className="block text-lg">JO1NID™</b>
            <p className="mt-2 text-[#b9c9dd]">Your digital student identity across the CareerBank ecosystem.</p>
          </Card>
          <Card>
            <b className="block text-lg">VERI5™</b>
            <p className="mt-2 text-[#b9c9dd]">Verified achievement records recognised by partners and employers.</p>
          </Card>
          <Card>
            <b className="block text-lg">JO1NUNI™</b>
            <p className="mt-2 text-[#b9c9dd]">Campus access for coordinators to manage participation and reporting.</p>
          </Card>
          <Card>
            <b className="block text-lg">JO1NBiz™</b>
            <p className="mt-2 text-[#b9c9dd]">Partner access for sponsors, employers, and venture supporters.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
