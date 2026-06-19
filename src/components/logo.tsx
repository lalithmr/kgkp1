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
        width={60}
        height={60}
        priority={priority}
        className="h-9 w-9 md:h-11 md:w-11 lg:h-[52px] lg:w-[52px] xl:h-[60px] xl:w-[60px] rounded-full ring-1 ring-brand-line object-contain"
      />
      {withWordmark ? (
        <span className="flex flex-col justify-center">
          <span className="font-heading text-base md:text-lg lg:text-xl font-semibold tracking-[0.08em] text-brand-primary dark:text-brand-heading leading-tight">
            KGKP
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-brand-muted leading-tight">
            Consultancy
          </span>
        </span>
      ) : null}
    </Link>
  );
}
