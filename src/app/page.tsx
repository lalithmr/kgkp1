import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { aboutPreview, heroContent, services, siteConfig, whyChooseUs } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero-shell overflow-hidden">
        <div className="mx-auto grid w-full max-w-[100%] gap-14 px-4 py-20 sm:max-w-[640px] md:max-w-[768px] md:py-24 lg:max-w-[1024px] lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28 xl:max-w-[1280px] 2xl:max-w-[1440px] min-[1920px]:max-w-[1800px] min-[2560px]:max-w-[2400px] min-[3440px]:max-w-[3200px]">
          <AnimatedSection className="max-w-3xl min-[1920px]:max-w-4xl min-[2560px]:max-w-5xl min-[3440px]:max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-muted">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-6 font-heading text-fluid-6xl leading-[1.02] text-brand-text">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-body sm:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="primary-button">
                Book a Consultation
              </Link>
              <Link href="/contact" className="secondary-button">
                Contact Us
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="detail-chip">
                <p className="detail-chip-label">Firm</p>
                <p className="detail-chip-value">{siteConfig.name}</p>
              </div>
              <div className="detail-chip">
                <p className="detail-chip-label">Expertise</p>
                <p className="detail-chip-value">Accounting, Taxation & Compliance</p>
              </div>
              <div className="detail-chip">
                <p className="detail-chip-label">Tagline</p>
                <p className="detail-chip-value">{siteConfig.tagline}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="relative" delay={0.1}>
            <div className="premium-card relative overflow-hidden p-8 sm:p-10">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/70 to-transparent" />
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand-muted">
                Where Knowledge Creates Confidence
              </p>
              <h2 className="mt-4 font-heading text-fluid-3xl text-brand-text">
                KGKP Consultancy
              </h2>
              <p className="mt-3 text-lg text-brand-primary">
                Chartered Accountants & Business Advisors
              </p>
              <div className="mt-8 space-y-4 rounded-[2rem] bg-brand-soft/75 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-muted">
                    Founder
                  </p>
                  <p className="mt-1 text-xl font-medium text-brand-text">
                    CA. {siteConfig.founder}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-muted">
                    Contact
                  </p>
                  <a href={siteConfig.phoneHref} className="mt-1 block text-xl text-brand-text transition hover:text-brand-primary">
                    {siteConfig.phone}
                  </a>
                  <a href={siteConfig.emailHref} className="block text-base text-brand-body transition hover:text-brand-primary">
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-muted">
                    Office
                  </p>
                  <p className="mt-1 text-base leading-7 text-brand-body">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="About Preview"
            title={aboutPreview.title}
            description={aboutPreview.body}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Reliable financial guidance for businesses and individuals",
              "Thoughtful planning across tax, compliance, and reporting",
              "Client-focused communication that stays practical and clear",
              "Professional support designed for responsive execution",
            ].map((item) => (
              <div key={item} className="premium-card min-h-40">
                <p className="font-heading text-2xl text-brand-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <SectionHeading
          eyebrow="Services"
          title="Solutions Designed Around Accuracy, Compliance, and Growth"
          description="We support businesses, startups, professionals, and individuals with structured financial services that reduce complexity and strengthen decision-making."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Professional Partner Focused on Clarity and Dependability"
            description="As a newly established firm, our emphasis is not on inflated claims but on delivering careful, ethical, and high-quality service from the very first interaction."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item} className="premium-card flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white">
                  +
                </span>
                <p className="text-lg leading-8 text-brand-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <div className="cta-banner">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Ready to Talk?
            </p>
            <h2 className="mt-4 font-heading text-fluid-3xl leading-tight text-brand-text">
              Build financial confidence with timely, practical support.
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-body sm:text-lg">
              Speak with KGKP Consultancy for accounting, taxation, compliance,
              registrations, and advisory support tailored to your requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="primary-button">
              Book a Consultation
            </Link>
            <a href={siteConfig.phoneHref} className="secondary-button">
              Call Now
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

