import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "dark" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-lg font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2";

// Primary / dark CTAs use the brand's signature uppercase, letter-spaced label.
const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white uppercase tracking-wide shadow-lg shadow-emerald-900/10 hover:bg-brand-strong",
  outline:
    "border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white",
  dark: "bg-brand-deep text-white uppercase tracking-wide hover:bg-[#00524A]",
  ghost:
    "border border-slate-200 bg-white text-brand-deep hover:border-brand-accent hover:text-brand-accent",
  light:
    "border border-white/40 text-white hover:bg-white hover:text-brand-deep",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3",
  lg: "px-7 py-4 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonProps = BaseProps &
  (
    | { href: string; type?: never }
    | { href?: undefined; type?: "button" | "submit" }
  );

export default function Button({
  href,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
}: ButtonProps) {
  const classes = [
    base,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
