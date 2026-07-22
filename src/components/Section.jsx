export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="hatch-wrap">{children}</div>
    </section>
  )
}

export function SectionHeading({ kicker, title, lead, center = false }) {
  return (
    <div className={`hatch-on-gradient-soft ${center ? 'text-center mx-auto' : ''}`}>
      {kicker && (
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white" style={{ textShadow: 'none' }}>
          {kicker}
        </p>
      )}
      <h2 className="m-0 mb-3.5 text-[clamp(30px,4vw,50px)] leading-[1.05] tracking-[-1.5px]">{title}</h2>
      {lead && <p className={`mb-7 max-w-[800px] text-lg text-body ${center ? 'mx-auto' : ''}`}>{lead}</p>}
    </div>
  )
}
