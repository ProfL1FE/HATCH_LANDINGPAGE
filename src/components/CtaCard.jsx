import Button from './Button'

export default function CtaCard({
  imageSrc,
  imageAlt = '',
  videoSrc,
  kicker,
  title,
  description,
  buttonText,
  buttonTo,
  onButtonClick,
  className = '',
}) {
  return (
    <div className={`hatch-glass flex flex-col overflow-hidden rounded-[28px] md:flex-row ${className}`}>
      <div className="md:w-2/5">
        {videoSrc ? (
          <video src={videoSrc} autoPlay muted loop playsInline className="h-56 w-full object-cover md:h-full" />
        ) : (
          <img src={imageSrc} alt={imageAlt} className="h-56 w-full object-cover md:h-full" />
        )}
      </div>
      <div className="flex w-full flex-col justify-center p-7 md:w-3/5 md:p-10">
        {kicker && <p className="m-0 mb-2 text-sm font-bold uppercase tracking-wide text-cyan">{kicker}</p>}
        <h2 className="m-0 mb-3 font-serif text-[clamp(24px,3vw,36px)] leading-tight tracking-[-0.5px]">{title}</h2>
        <p className="m-0 mb-6 max-w-[440px] text-body">{description}</p>
        <div>
          <Button to={buttonTo} variant="gradient" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}
