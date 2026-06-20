import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutPageContent, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KGKP Consultancy, our founder Anil K.P., and the professional values guiding our accounting, taxation, and compliance services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Client-Focused Firm Built on Integrity, Accuracy, and Trust"
        description="KGKP Consultancy delivers thoughtful professional support for businesses and individuals who value clarity, responsiveness, and ethical financial guidance."
      />

      <AnimatedSection className="section-shell section-about">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="About the Firm"
            title="Practical guidance with a professional standard of care"
            description={aboutPageContent.about}
          />
          <div className="premium-card">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Founder
            </p>
            <h2 className="h2 mt-4 text-brand-text">
              {siteConfig.founder}
            </h2>
            <p className="mt-5 text-brand-body">
              {aboutPageContent.message}
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell section-about">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="premium-card">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Mission
            </p>
            <h2 className="h2 mt-4 text-brand-text">
              Purposeful financial service
            </h2>
            <p className="mt-5 text-brand-body">
              {aboutPageContent.mission}
            </p>
          </div>
          <div className="premium-card">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Vision
            </p>
            <h2 className="h2 mt-4 text-brand-text">
              Long-term trust and professional excellence
            </h2>
            <p className="mt-5 text-brand-body">
              {aboutPageContent.vision}
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell section-about">
        <SectionHeading
          eyebrow="Professional Values"
          title="The standards that shape every client relationship"
          description="We prioritize dependable communication, careful execution, and advice that remains grounded in real-world business needs."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {aboutPageContent.values.map((value) => (
            <div key={value} className="premium-card">
              <h3 className="h3 !mb-0 text-brand-text">{value}</h3>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}

