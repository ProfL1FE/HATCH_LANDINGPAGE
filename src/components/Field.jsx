export default function Field({ label, error, id, className = '', ...rest }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink/90">
        {label}
      </label>
      <input
        id={id}
        className={`w-full rounded-lg border bg-panel-2/80 px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-gold/60 ${
          error ? 'border-red-400/60' : 'border-line'
        } ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
