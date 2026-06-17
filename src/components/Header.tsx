import type { ReactNode } from "react";
import Logo from "./Logo";

type HeaderProps = {
  /** Destination for the logo link. */
  logoHref?: string;
  /** Content rendered on the right (actions, user info, nav…). */
  right?: ReactNode;
  className?: string;
};

export default function Header({
  logoHref = "/",
  right,
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`mb-10 flex items-center justify-between gap-4 ${className}`}
    >
      <Logo href={logoHref} height={44} priority />
      {right ? <div className="flex items-center gap-3">{right}</div> : null}
    </header>
  );
}
