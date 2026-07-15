import { useState } from 'react'
import Section, { SectionHeading } from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'

const TRACKS = {
  student: {
    label: 'Student',
    access: 'JO1NID',
    desc: 'Create your JO1NID, complete your CareerBank profile, and enter the challenge individually or as a team.',
    fields: ['Full name', 'Email address', 'University / College / TVET', 'Faculty', 'Team name (optional)'],
  },
  university: {
    label: 'University',
    access: 'JO1NUNI',
    desc: 'Apply as an official HATCH Campus Partner to unlock campus dashboards, briefing materials, and impact reporting.',
    fields: ['Institution name', 'Coordinator name', 'Coordinator email', 'Estimated student reach'],
  },
  partner: {
    label: 'Partner',
    access: 'JO1NBiz',
    desc: 'Register as a sponsor, employer, or ecosystem partner to connect with finalist teams and student ventures.',
    fields: ['Organisation name', 'Contact name', 'Contact email', 'Partnership interest'],
  },
}

export default function Register() {
  const [track, setTrack] = useState('student')
  const [submitted, setSubmitted] = useState(false)
  const current = TRACKS[track]

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id="register" className="pt-16">
      <SectionHeading
        kicker="Register"
        title="Join the HATCH ecosystem"
        lead="Choose your track. Students register through JO1NID, universities through JO1NUNI, and partners through JO1NBiz."
      />

      <div className="grid gap-4 lg:grid-cols-[.85fr_1.15fr]">
        <Card>
          <div className="mb-4 grid grid-cols-3 gap-2">
            {Object.entries(TRACKS).map(([key, t]) => (
              <button
                key={key}
                onClick={() => {
                  setTrack(key)
                  setSubmitted(false)
                }}
                className={`rounded-2xl border p-3 text-sm font-bold transition ${
                  track === key
                    ? 'border-cyan/45 bg-cyan/18 text-white'
                    : 'border-line bg-white/5 text-[#cfdef0] hover:bg-white/8'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <span className="mb-2 inline-block rounded-full bg-cyan/15 px-2.5 py-1 text-xs font-bold text-cyan">
            {current.access}
          </span>
          <p className="mt-3 text-[#b9c9dd]">{current.desc}</p>
        </Card>

        <Card>
          {submitted ? (
            <div className="rounded-2xl border border-green/30 bg-green/8 p-4 text-[#d8ffe5]">
              <b>Registration received.</b>
              <p className="mt-1">
                Your {current.label.toLowerCase()} application via {current.access} has been submitted. You'll
                receive a confirmation email with next steps and download centre access.
              </p>
            </div>
          ) : (
            <form className="grid gap-3" onSubmit={handleSubmit}>
              {current.fields.map((field) => (
                <input
                  key={field}
                  required
                  placeholder={field}
                  type={field.toLowerCase().includes('email') ? 'email' : 'text'}
                  className="w-full rounded-2xl border border-line bg-[#050a12]/72 px-3.5 py-3.5 text-white placeholder:text-muted"
                />
              ))}
              <textarea
                placeholder="Tell us your idea, campus, or partnership interest"
                className="min-h-24 w-full resize-y rounded-2xl border border-line bg-[#050a12]/72 px-3.5 py-3.5 text-white placeholder:text-muted"
              />
              <Button type="submit">Submit {current.label} Registration</Button>
            </form>
          )}
        </Card>
      </div>
    </Section>
  )
}
