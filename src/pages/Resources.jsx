import { useState } from 'react'
import Section, { SectionHeading } from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { DOWNLOADS } from '../data/hatch'

export default function Resources() {
  const [unlockedNotice, setUnlockedNotice] = useState('')

  function handleDownload(title) {
    setUnlockedNotice(title)
    window.setTimeout(() => setUnlockedNotice(''), 4000)
  }

  return (
    <>
      <Section id="resources-hero" className="pt-16">
        <SectionHeading
          kicker="Resources"
          title="Download centre"
          lead="Downloads are gated. Sign in with JO1NID to access official briefs and templates."
        />
      </Section>

      <Section id="downloads" className="bg-panel/40">
        {unlockedNotice && (
          <div className="mb-5 rounded-2xl border border-green/30 bg-green/8 p-3.5 text-[#d8ffe5]">
            <b>Sign in required.</b> Register or sign in with JO1NID to download: {unlockedNotice}.{' '}
            <Button to="/signin" size="sm" variant="secondary" className="ml-2">Sign In</Button>
          </div>
        )}
        <div className="grid gap-3.5 md:grid-cols-3">
          {DOWNLOADS.map((d) => (
            <Card key={d.title} className="flex flex-col gap-3">
              <span className="w-max rounded-full bg-gold px-2 py-1 text-xs font-extrabold text-[#06101c]">
                JO1NID required
              </span>
              <strong className="text-lg">{d.title}</strong>
              <span className="text-sm text-muted">{d.desc}</span>
              <Button variant="secondary" size="sm" onClick={() => handleDownload(d.title)}>
                Download
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="resource-categories">
        <SectionHeading kicker="Categories" title="What's inside the download centre." />
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="mb-2 text-xl">Student Brief &amp; Pitch Deck</h3>
            <p className="text-[#b9c9dd]">
              Everything a participant needs: the competition overview, package comparison, benefit breakdown,
              stage-by-stage explanation, FAQ, and a ready-to-use pitch deck template.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl">AI Guidelines &amp; Judging Criteria</h3>
            <p className="text-[#b9c9dd]">
              Clear disclosure expectations for responsible AI usage, plus the evaluation areas judges use across
              problem framing, solution quality, impact, feasibility, and presentation.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl">University Partnership Brief</h3>
            <p className="text-[#b9c9dd]">
              The full campus partner process, university benefits, dashboard access, and reporting structure for
              coordinators.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl">Media Kit</h3>
            <p className="text-[#b9c9dd]">
              Official HATCH introduction, logo files, suggested captions, and social sharing material for
              participants, universities, and partners.
            </p>
          </Card>
        </div>
      </Section>
    </>
  )
}
