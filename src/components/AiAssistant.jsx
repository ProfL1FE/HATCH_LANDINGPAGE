import { useState } from 'react'

export default function AiAssistant() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {open && (
        <div className="mb-3 w-64 rounded-2xl border border-line bg-panel/95 p-4 text-sm text-[#b9c9dd] shadow-hatch backdrop-blur-md">
          <b className="mb-1 block text-ink">HATCH AI Assistant</b>
          Coming soon — this assistant will help you navigate registration, the pathway, and your CareerBank profile.
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2.5 rounded-full border border-line bg-panel/95 py-2.5 pl-2.5 pr-4 shadow-hatch backdrop-blur-md hover:bg-panel"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet text-lg text-[#06101c]">
          ✦
        </span>
        <span className="text-left">
          <b className="block text-xs leading-tight text-ink">HATCH AI Assistant</b>
          <small className="text-[11px] leading-tight text-muted">How can I help you today?</small>
        </span>
      </button>
    </div>
  )
}
