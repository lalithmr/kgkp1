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
      className={`group inline-flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 transition-transform duration-300 hover:scale-[1.02] shrink-0 ${className}`.trim()}
      aria-label="KGKP Consultancy Home"
    >
      <Image
        src="/logo-light.svg"
        alt="KGKP Consultancy logo"
        width={140}
        height={140}
        priority={priority}
        className="h-14 w-14 sm:h-16 sm:w-16 md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] xl:h-[140px] xl:w-[140px] shrink-0 object-contain dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="KGKP Consultancy logo"
        width={140}
        height={140}
        priority={priority}
        className="hidden h-14 w-14 sm:h-16 sm:w-16 md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] xl:h-[140px] xl:w-[140px] shrink-0 object-contain dark:block"
      />
      {withWordmark ? (
        <span className="flex flex-col justify-center whitespace-nowrap">
          <span className="font-heading text-sm md:text-base lg:text-lg font-medium tracking-[0.08em] text-[#1B1C46] dark:text-[#E2E8F0] leading-tight">
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
