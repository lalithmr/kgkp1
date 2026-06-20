import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore audit, taxation, accounting, startup registration, certification, and NGO compliance services offered by KGKP Consultancy.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Specialized services for accounting, compliance, and business growth"
        description="From audit and taxation to startup registrations and certifications, KGKP Consultancy provides clear, dependable support across critical financial and regulatory functions."
        secondaryButtonLabel="About Us"
        secondaryButtonHref="/about"
      />

      <AnimatedSection className="section-shell section-services">
        <SectionHeading
          eyebrow="Service Portfolio"
          title="Comprehensive support across business and individual requirements"
          description="Each engagement is handled with a focus on accuracy, timeliness, and practical execution."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}

