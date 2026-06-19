import type { Metadata } from "next";
import { EB_Garamond, Playfair_Display } from "next/font/google";
import Script from "next/script";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/data/site";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "KGKP Consultancy | Chartered Accountants & Business Advisors",
    template: "%s | KGKP Consultancy",
  },
  description: siteConfig.description,
  keywords: [
    "KGKP Consultancy",
    "Chartered Accountant Bangalore",
    "Taxation Services",
    "Audit and Assurance",
    "GST Registration",
    "Business Compliance",
  ],
  openGraph: {
    title: "KGKP Consultancy",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: "KGKP Consultancy",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: siteConfig.name,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: "+91 6360646164",
  slogan: siteConfig.tagline,
  founder: {
    "@type": "Person",
    name: `CA. ${siteConfig.founder}`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "#2073-B, Devapriya Palace, 4th Cross Road, Judicial Layout",
    addressLocality: "Yelahanka",
    addressRegion: "Bangalore North",
    postalCode: "560064",
    addressCountry: "IN",
  },
  areaServed: "Bangalore",
  url: siteConfig.siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${garamond.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Script
            id="kgkp-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <div className="site-background">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-primary focus:px-4 focus:py-3 focus:text-white"
            >
              Skip to content
            </a>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <BottomNav />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
