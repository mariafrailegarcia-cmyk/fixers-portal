import Image from "next/image";
import Link from "next/link";

// Intrinsic dimensions of /public/fixers-logo.png (186 x 79).
const LOGO_RATIO = 186 / 79;

type LogoProps = {
  /** Rendered height in pixels. Width is derived to keep the exact aspect ratio. */
  height?: number;
  /** Where the logo links to. Pass null to render a plain (non-link) logo. */
  href?: string | null;
  priority?: boolean;
  className?: string;
};

export default function Logo({
  height = 48,
  href = "/",
  priority = false,
  className = "",
}: LogoProps) {
  const width = Math.round(height * LOGO_RATIO);

  const image = (
    <Image
      src="/fixers-logo.png"
      alt="Fixers Finance"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );

  if (href === null) {
    return image;
  }

  return (
    <Link
      href={href}
      aria-label="Ir al inicio de Fixers Finance"
      className="inline-flex items-center"
    >
      {image}
    </Link>
  );
}
