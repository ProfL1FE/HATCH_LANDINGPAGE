import Button from './Button'

export default function ComingSoon({ title, description }) {
  return (
    <section className="flex min-h-[70vh] items-center pt-16">
      <div className="hatch-wrap text-center">
        <span className="hatch-pill mx-auto mb-6 w-max">{title}</span>
        <h1 className="m-0 mb-4 text-[clamp(36px,6vw,64px)] leading-[1.02] tracking-[-2px]">
          Coming soon.
        </h1>
        <p className="mx-auto mb-8 max-w-[560px] text-lg text-[#c6d5e8]">
          {description || `We're building the ${title} page. Check back soon.`}
        </p>
        <Button to="/">Back to Home</Button>
      </div>
    </section>
  )
}
