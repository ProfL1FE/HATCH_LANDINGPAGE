export default function Field({ label, error, id, className = '', icon: Icon, ...rest }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink/90">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted/70"
          />
        )}
        <input
          id={id}
          className={`w-full rounded-[13px] border bg-panel-2/70 py-3.5 text-ink placeholder:text-muted/55 outline-none transition-all duration-200 focus:border-cyan/70 focus:bg-panel-2/90 focus:shadow-[0_0_0_3px_rgba(87,212,232,0.16)] focus:placeholder:text-muted/85 ${
            Icon ? 'pl-10 pr-4' : 'px-4'
          } ${error ? 'border-red-400/60' : 'border-line'} ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
