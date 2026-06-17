import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/45 bg-brand-primary text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.9fr_1fr] lg:px-8">
        <div className="space-y-5">
          <Logo withWordmark={false} className="text-white [&_span]:text-white" />
          <div>
            <p className="font-heading text-2xl">KGKP Consultancy</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-white/80">
              Chartered Accountants & Business Advisors delivering clear,
              dependable support in taxation, compliance, accounting, and
              business setup.
            </p>
          </div>
        </div>

        <div>
          <p className="font-heading text-xl">Quick Links</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/80">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-heading text-xl">Contact</p>
          <div className="mt-5 space-y-3 text-sm leading-7 text-white/80">
            <a href={siteConfig.phoneHref} className="block transition hover:text-white">
              {siteConfig.phone}
            </a>
            <a href={siteConfig.emailHref} className="block transition hover:text-white">
              {siteConfig.email}
            </a>
            <p>{siteConfig.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs tracking-[0.16em] text-white/60 uppercase">
        {siteConfig.tagline}
      </div>
    </footer>
  );
}

