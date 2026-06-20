import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
};

export function PageHero({ 
  eyebrow, 
  title, 
  description,
  secondaryButtonLabel = "Explore Services",
  secondaryButtonHref = "/services"
}: PageHeroProps) {
  return (
    <section className="hero-shell section-shell section-hero overflow-hidden">
      <div className="mx-auto w-full max-w-[100%] px-[20px] md:px-[32px] lg:px-[48px] xl:px-[64px] min-[1600px]:max-w-[1600px] min-[1600px]:px-[80px]">
        <div className="max-w-3xl min-[1920px]:max-w-4xl min-[2560px]:max-w-5xl min-[3440px]:max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted">
            {eyebrow}
          </p>
          <h1 className="mt-6 font-heading text-fluid-5xl leading-[1.05] text-brand-text">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-body sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="primary-button">
              Book a Consultation
            </Link>
            <Link href={secondaryButtonHref} className="secondary-button">
              {secondaryButtonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

