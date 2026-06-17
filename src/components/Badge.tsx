import type { ReactNode } from "react";

type Variant = "success" | "warning" | "neutral" | "solid";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  success: "bg-brand-mint text-brand-accent",
  warning: "bg-amber-100 text-amber-700",
  neutral: "bg-slate-100 text-slate-500",
  solid: "bg-brand text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-sm",
};

type BadgeProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export default function Badge({
  variant = "success",
  size = "sm",
  className = "",
  children,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full font-bold ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
