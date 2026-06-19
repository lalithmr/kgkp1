import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-line bg-brand-surface dark:bg-[#0B1120] text-brand-text transition-colors duration-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 dark:via-brand-accent/30 to-transparent" />
      <div className="mx-auto grid w-full max-w-[100%] gap-10 px-4 py-14 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] lg:grid-cols-[1.3fr_0.9fr_1fr] xl:max-w-[1280px] 2xl:max-w-[1440px] min-[1920px]:max-w-[1800px] min-[2560px]:max-w-[2400px] min-[3440px]:max-w-[3200px] sm:px-6 lg:px-8">
        <div className="space-y-5">
          <Logo withWordmark={false} />
          <div>
            <p className="font-heading text-2xl text-brand-heading">KGKP Consultancy</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-brand-body dark:text-brand-muted">
              Chartered Accountants & Business Advisors delivering clear,
              dependable support in taxation, compliance, accounting, and
              business setup.
            </p>
          </div>
        </div>

        <div>
          <p className="font-heading text-xl text-brand-heading">Quick Links</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-brand-body dark:text-brand-muted">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-block transition-all duration-300 hover:-translate-y-1 hover:text-brand-primary dark:hover:text-brand-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-heading text-xl text-brand-heading">Contact</p>
          <div className="mt-5 space-y-3 text-sm leading-7 text-brand-body dark:text-brand-muted">
            <a href={siteConfig.phoneHref} className="inline-block transition-all duration-300 hover:-translate-y-1 hover:text-brand-primary dark:hover:text-brand-accent">
              {siteConfig.phone}
            </a>
            <br />
            <a href={siteConfig.emailHref} className="inline-block transition-all duration-300 hover:-translate-y-1 hover:text-brand-primary dark:hover:text-brand-accent">
              {siteConfig.email}
            </a>
            <p>{siteConfig.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-line px-4 py-5 pb-[88px] md:pb-5 text-center text-xs tracking-[0.16em] text-brand-muted uppercase">
        {siteConfig.tagline}
      </div>
    </footer>
  );
}

