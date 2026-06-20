export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kgkpconsultancy.com",
  name: "KGKP Consultancy",
  founder: "Anil K.P.",
  tagline: "Where Knowledge Creates Confidence",
  phone: "6360646164",
  phoneHref: "tel:+916360646164",
  whatsappHref:
    "https://wa.me/916360646164?text=Hello%20KGKP%20Consultancy%2C%20I%20would%20like%20to%20book%20a%20consultation.",
  email: "kgkpconsultancy@gmail.com",
  emailHref: "mailto:kgkpconsultancy@gmail.com",
  addressLines: [
    "#2073-B, Devapriya Palace",
    "4th Cross Road, Judicial Layout",
    "Yelahanka, Bangalore North - 560064",
  ],
  address:
    "#2073-B, Devapriya Palace, 4th Cross Road, Judicial Layout, Yelahanka, Bangalore North - 560064",
  mapsEmbed:
    "https://www.google.com/maps?q=%232073-B%2C%20Devapriya%20Palace%2C%204th%20Cross%20Road%2C%20Judicial%20Layout%2C%20Yelahanka%2C%20Bangalore%20North%20-%20560064&z=15&output=embed",
  description:
    "KGKP Consultancy is a professional Chartered Accountancy firm led by Anil K.P., delivering reliable, practical, and client-focused accounting, taxation, and compliance solutions.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
};

export const heroContent = {
  eyebrow: "Chartered Accountants & Business Advisors",
  title: "Professional Accounting, Taxation & Compliance Solutions",
  subtitle:
    "Helping businesses, startups, professionals, and individuals navigate financial and regulatory requirements with confidence.",
};

export const aboutPreview = {
  title: "About KGKP Consultancy",
  body: "KGKP Consultancy is a professional Chartered Accountancy firm led by CA. Anil K.P., committed to delivering reliable, practical, and client-focused financial solutions. We assist businesses and individuals in navigating taxation, compliance, accounting, and regulatory requirements with confidence and clarity.",
};

export const services = [
  {
    title: "Audit & Assurance",
    description:
      "Independent and objective audit services to strengthen financial transparency and compliance.",
    items: ["Statutory Audit", "Tax Audit", "Internal Audit", "GST Audit"],
  },
  {
    title: "Taxation Services",
    description:
      "Comprehensive tax solutions for businesses and individuals.",
    items: [
      "Income Tax Return Filing",
      "GST Return Filing",
      "Tax Planning & Advisory",
      "TDS Compliance & Filing",
      "Representation before Tax Authorities",
    ],
  },
  {
    title: "Accounting & Compliance",
    description:
      "Accurate accounting and regulatory compliance support.",
    items: [
      "Bookkeeping & Accounting",
      "Finalization of Accounts",
      "MCA / ROC Compliance",
      "CMA & Project Reports",
      "Cash Flow & Budget Planning",
      "IND-AS / IFRS Compliance",
    ],
  },
  {
    title: "Business Registration & Startup Support",
    description:
      "Helping entrepreneurs establish and grow their businesses.",
    items: [
      "GST Registration",
      "PAN / TAN Registration",
      "UDYAM Registration",
      "Partnership Registration",
      "LLP Registration",
      "Private Limited Company Incorporation",
      "Import Export Code (IEC)",
    ],
  },
  {
    title: "Certifications",
    description:
      "Professional certification services for financial and regulatory requirements.",
    items: [
      "Net Worth Certificates",
      "Turnover Certificates",
      "Provisional Financial Statements",
      "Utilization Certificates",
      "Income Certifications",
    ],
  },
  {
    title: "Trust & NGO Services",
    description:
      "Compliance and registration support for non-profit organizations.",
    items: [
      "Trust Registration",
      "NGO Registration",
      "80G Registration",
      "12AB Registration",
      "GST LUT Filing",
    ],
  },
];

export const whyChooseUs = [
  "Professional and Ethical Services",
  "Personalized Client Attention",
  "Timely Compliance Support",
  "Practical Business Solutions",
  "Transparent Communication",
  "Commitment to Quality and Accuracy",
];

export const aboutPageContent = {
  about:
    "KGKP Consultancy was established to provide dependable accounting, taxation, and compliance guidance rooted in professional integrity and practical business understanding. We focus on clarity, responsiveness, and solutions that help clients make confident financial decisions.",
  message:
    "At KGKP Consultancy, our approach is simple: understand every client's goals, simplify complex compliance requirements, and deliver advice that is timely, accurate, and actionable. We aim to be a steady professional partner for businesses, professionals, and individuals alike.",
  mission:
    "To deliver trustworthy, precise, and client-focused financial and regulatory services that help clients operate with confidence and peace of mind.",
  vision:
    "To be recognized as a respected advisory firm known for ethical practice, dependable execution, and long-term client relationships built on trust.",
  values: [
    "Integrity in every recommendation and engagement",
    "Responsiveness that respects client timelines",
    "Accuracy supported by professional diligence",
    "Clarity in communication and process guidance",
    "Practical thinking aligned with real business needs",
  ],
};
