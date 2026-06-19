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
      className={`group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] ${className}`.trim()}
      aria-label="KGKP Consultancy Home"
    >
      <Image
        src="/kgkp-logo.svg"
        alt="KGKP Consultancy logo"
        width={72}
        height={72}
        priority={priority}
        className="h-10 w-10 md:h-12 md:w-12 lg:h-[60px] lg:w-[60px] xl:h-[72px] xl:w-[72px] rounded-full border-[1.5px] border-brand-primary/20 bg-white shadow-sm p-[2px] object-contain"
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
