import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="hero-shell overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
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
            <Link href="/services" className="secondary-button">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

