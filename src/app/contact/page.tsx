import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KGKP Consultancy for accounting, taxation, compliance, and business advisory support in Bangalore.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your accounting, taxation, or compliance needs"
        description="Reach out for responsive guidance, consultation scheduling, and professional support tailored to your business or personal requirements."
      />

      <AnimatedSection className="section-shell section-contact">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />
          <div className="grid gap-6">
            <div className="premium-card card-contact">
              <SectionHeading
                eyebrow="Direct Contact"
                title="Connect with KGKP Consultancy"
                description="Use the contact form, call directly, email us, or visit the office location in Yelahanka, Bangalore North."
              />
              <div className="mt-8 grid gap-4">
                <a href={siteConfig.phoneHref} className="contact-link-card">
                  <span className="contact-link-label">Phone : </span>
                  <span className="contact-link-value">{siteConfig.phone}</span>
                </a>
                <a href={siteConfig.emailHref} className="contact-link-card">
                  <span className="contact-link-label">Email : </span>
                  <span className="contact-link-value">{siteConfig.email}</span>
                </a>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link-card"
                >
                  <span className="contact-link-label">WhatsApp</span>
                  <span className="contact-link-value">Start a conversation</span>
                </a>
              </div>
            </div>

            <div className="premium-card card-location">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-muted">
                Address
              </p>
              <div className="mt-5 space-y-1 text-base leading-8 text-brand-body">
                {siteConfig.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell section-contact">
        <div
          className="overflow-hidden rounded-[2rem] border border-brand-line bg-brand-surface"
          style={{ boxShadow: "var(--shadow-premium)" }}
        >
          <div className="border-b border-brand-line px-6 py-6 sm:px-8">
            <SectionHeading
              eyebrow="Google Maps"
              title="Find Our Office"
              description="Our office is located at Devapriya Palace, Judicial Layout, Yelahanka, Bangalore North."
            />
          </div>
          <iframe
            title="KGKP Consultancy office location"
            src={siteConfig.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[24rem] w-full border-0 sm:h-[30rem]"
          />
        </div>
      </AnimatedSection>
    </>
  );
}

