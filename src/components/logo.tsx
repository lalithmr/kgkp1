import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  withWordmark?: boolean;
  className?: string;
  priority?: boolean;
};

export function Logo({
  withWordmark = true,
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 ${className}`.trim()}
      aria-label="KGKP Consultancy Home"
    >
      <Image
        src="/kgkp-logo.svg"
        alt="KGKP Consultancy logo"
        width={52}
        height={52}
        priority={priority}
        className="h-11 w-11 rounded-full ring-1 ring-[rgba(43,76,101,0.14)]"
      />
      {withWordmark ? (
        <span className="flex flex-col">
          <span className="font-heading text-lg font-semibold tracking-[0.08em] text-brand-primary">
            KGKP
          </span>
          <span className="text-xs uppercase tracking-[0.28em] text-brand-muted">
            Consultancy
          </span>
        </span>
      ) : null}
    </Link>
  );
}
