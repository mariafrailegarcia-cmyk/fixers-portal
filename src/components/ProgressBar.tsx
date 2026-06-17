type ProgressBarProps = {
  /** Completion percentage between 0 and 100. */
  value: number;
  label?: string;
  className?: string;
};

export default function ProgressBar({
  value,
  label = "Progreso de la operación",
  className = "",
}: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div className={`rounded-3xl bg-surface p-5 ${className}`}>
      <div className="mb-3 flex justify-between text-sm font-bold">
        <span>{label}</span>
        <span className="text-brand-accent">{safeValue}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-accent to-brand"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}
