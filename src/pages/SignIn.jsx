import { useState } from 'react'
import Section, { SectionHeading } from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'

const PORTALS = {
  JO1NID: {
    role: 'Student Participant',
    dashboard: 'Registration, profile, verification, downloads, idea submission',
    progress: '33%',
  },
  JO1NBiz: {
    role: 'Business / Sponsor / Partner',
    dashboard: 'Sponsor, employer, venture and partner tools',
    progress: '66%',
  },
  JO1NUNI: {
    role: 'Campus Coordinator',
    dashboard: 'Campus coordinator, student list, dashboard and impact report',
    progress: '100%',
  },
}

export default function SignIn() {
  const [portal, setPortal] = useState('JO1NID')
  const [notice, setNotice] = useState('')
  const current = PORTALS[portal]

  function handleSubmit(e) {
    e.preventDefault()
    const email = e.target.email.value || 'demo@hatch.global'
    setNotice(`${portal} sign-in successful. ${email} routed to the ${current.role} dashboard. Download centre unlocked.`)
  }

  return (
    <Section id="signin" className="pt-16">
      <SectionHeading
        kicker="Sign In"
        title="Sign in through the JO1N ecosystem"
        lead="One landing page, three access routes: students through JO1NID, partners and ventures through JO1NBiz, and universities through JO1NUNI."
      />

      <div className="grid gap-4 lg:grid-cols-[.95fr_1.05fr]">
        <Card>
          <div className="mb-4 grid grid-cols-3 gap-2">
            {Object.keys(PORTALS).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setPortal(key)
                  setNotice('')
                }}
                className={`rounded-2xl border p-3 text-sm font-bold transition ${
                  portal === key
                    ? 'border-cyan/45 bg-cyan/18 text-white'
                    : 'border-line bg-white/5 text-[#cfdef0] hover:bg-white/8'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
          <form className="grid gap-3" onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="w-full rounded-2xl border border-line bg-[#050a12]/72 px-3.5 py-3.5 text-white placeholder:text-muted"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-2xl border border-line bg-[#050a12]/72 px-3.5 py-3.5 text-white placeholder:text-muted"
            />
            <select
              name="role"
              defaultValue={current.role}
              className="w-full rounded-2xl border border-line bg-[#050a12]/72 px-3.5 py-3.5 text-white"
            >
              <option>Student Participant</option>
              <option>Team Leader</option>
              <option>Campus Coordinator</option>
              <option>Business / Sponsor / Partner</option>
            </select>
            <Button type="submit">Continue</Button>
            {notice && (
              <div className="rounded-2xl border border-green/30 bg-green/8 p-3 text-sm text-[#d8ffe5]">{notice}</div>
            )}
          </form>
        </Card>

        <Card>
          <h3 className="mb-3 text-xl">After sign-in</h3>
          <table className="w-full border-collapse overflow-hidden rounded-[18px]">
            <thead>
              <tr className="bg-white/7 text-[#e9f7ff]">
                <th className="border-b border-line p-3.5 text-left">Access</th>
                <th className="border-b border-line p-3.5 text-left">Dashboard</th>
              </tr>
            </thead>
            <tbody className="text-[#c2d1e4]">
              {Object.entries(PORTALS).map(([key, p]) => (
                <tr key={key}>
                  <td className="border-b border-line p-3.5">{key}</td>
                  <td className="border-b border-line p-3.5">{p.dashboard}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="my-3 h-2.5 overflow-hidden rounded-full bg-white/9">
            <div
              className="h-full bg-gradient-to-r from-cyan to-violet transition-all duration-500"
              style={{ width: current.progress }}
            />
          </div>
          <p className="text-muted">
            {portal} access selected — {current.role} route.
          </p>
        </Card>
      </div>
    </Section>
  )
}
