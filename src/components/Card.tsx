import type { ReactNode } from "react";

type CardProps = {
  /** Use the dark "premium" treatment for highlighted sections. */
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
};

export default function Card({
  tone = "light",
  className = "",
  children,
}: CardProps) {
  const toneClasses =
    tone === "dark"
      ? "bg-brand-deep text-white"
      : "border border-slate-100 bg-white text-ink";

  return (
    <div
      className={`rounded-[2rem] p-7 shadow-xl shadow-slate-900/5 ${toneClasses} ${className}`}
    >
      {children}
    </div>
  );
}
