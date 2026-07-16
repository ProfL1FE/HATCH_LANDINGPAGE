import { Link } from 'react-router-dom'

export default function ComingSoon({ title }) {
  return (
    <section className="flex min-h-[calc(100svh-74px)] items-center justify-center bg-white text-[#0e1320]">
      <div className="anim-rise mx-auto w-[92vw] max-w-[560px] py-24 text-center">
        <span className="inline-block rounded-full border border-[#eadfc4] bg-[#faf6ec] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[3px] text-[#b98a2e]">
          {title}
        </span>
        <h1 className="font-serif m-0 mb-4 mt-7 text-[clamp(42px,6vw,68px)] font-semibold leading-[1.05] tracking-[-1px]">
          Coming soon.
        </h1>
        <div className="mx-auto mb-6 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#b98a2e] to-gold" />
        <p className="mx-auto mb-9 max-w-[400px] text-[15px] leading-relaxed text-[#5c6472]">
          We're crafting the {title} experience. Check back soon — it will be worth the wait.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#0e1320] px-7 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-white transition duration-300 ease-out hover:scale-[1.04] active:scale-[0.97]"
        >
          ← Back to Discover
        </Link>
      </div>
    </section>
  )
}
