const fs = require('fs');
const path = require('path');

const cssContent = `@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --brand-primary: #1F235F;
  --brand-secondary: #6B8BA4;
  --brand-accent: #5E72FF;
  --brand-text: #334155;
  --brand-heading: #0F172A;
  --brand-white: #FFFFFF;
  --brand-body: #334155;
  --brand-muted: #64748B;
  --brand-surface: #FFFFFF;
  --brand-line: #E2E8F0;
  --brand-background: #F8FAFC;
  --brand-section: #FFFFFF;
  --brand-whatsapp: #25D366;
  --brand-button: #1F235F;
  --brand-button-hover: #5E72FF;
  --shadow-premium: 0 12px 40px -10px rgba(31, 35, 95, 0.15), 0 0 0 1px rgba(31, 35, 95, 0.05);

  /* Typography Variables Default to Mobile */
  --font-heading: var(--font-outfit);
  --font-body: var(--font-inter);
  
  --weight-h1: 700;
  --weight-h2: 700;
  --weight-h3: 500;

  --h1-size: clamp(2rem, 6vw, 2.75rem);
  --h2-size: clamp(1.75rem, 5vw, 2.25rem);
  --h3-size: clamp(1.35rem, 4vw, 1.75rem);
  --body-size: clamp(1rem, 2vw, 1.125rem);
}

.dark {
  --brand-primary: #4B56D2;
  --brand-secondary: #6B8BA4;
  --brand-accent: #5E72FF;
  --brand-text: #E2E8F0;
  --brand-heading: #FFFFFF;
  --brand-white: #FFFFFF;
  --brand-body: #E2E8F0;
  --brand-muted: #94A3B8;
  --brand-surface: #131A2E;
  --brand-line: #334155;
  --brand-background: #0B1020;
  --brand-section: #0B1020;
  --brand-whatsapp: #25D366;
  --brand-button: #4B56D2;
  --brand-button-hover: #5E72FF;
  --shadow-premium: 0 12px 40px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
}

@theme inline {
  --color-brand-primary: var(--brand-primary);
  --color-brand-secondary: var(--brand-secondary);
  --color-brand-accent: var(--brand-accent);
  --color-brand-text: var(--brand-text);
  --color-brand-heading: var(--brand-heading);
  --color-brand-body: var(--brand-body);
  --color-brand-muted: var(--brand-muted);
  --color-brand-surface: var(--brand-surface);
  --color-brand-line: var(--brand-line);
  --color-brand-background: var(--brand-background);
  --color-brand-whatsapp: var(--brand-whatsapp);
}

/* Tablet */
@media (min-width: 768px) {
  :root {
    --font-heading: var(--font-manrope);
    --weight-h1: 800;
    --weight-h2: 800;
    --weight-h3: 600;

    --h1-size: clamp(2.5rem, 5vw, 3.5rem);
    --h2-size: clamp(2rem, 4vw, 2.75rem);
    --h3-size: clamp(1.5rem, 3vw, 2rem);
    --body-size: clamp(1.125rem, 1.5vw, 1.1875rem);
  }
}

/* Laptop */
@media (min-width: 1024px) {
  :root {
    --font-heading: var(--font-playfair);
    --weight-h1: 700;
    --weight-h2: 700;
    --weight-h3: 600;

    --h1-size: clamp(3.5rem, 5vw, 4.75rem);
    --h2-size: clamp(2.5rem, 4vw, 3.5rem);
    --h3-size: clamp(1.75rem, 3vw, 2.25rem);
    --body-size: clamp(1.1875rem, 1vw, 1.25rem);
  }
}

/* Desktop */
@media (min-width: 1440px) {
  :root {
    --font-heading: var(--font-cormorant);
    --weight-h1: 600;
    --weight-h2: 600;
    --weight-h3: 500;

    --h1-size: clamp(4rem, 5vw, 5.5rem);
    --h2-size: clamp(3rem, 4vw, 4rem);
    --h3-size: clamp(2rem, 3vw, 2.75rem);
    --body-size: clamp(1.25rem, 1vw, 1.375rem);
  }
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  overflow-x: clip;
  background-color: var(--brand-background);
  color: var(--brand-text);
  font-family: var(--font-body), sans-serif;
  font-size: var(--body-size);
  line-height: 1.75;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

*:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 4px;
}

.dark *:focus-visible {
  outline-color: var(--brand-accent);
}

img {
  max-width: 100%;
  height: auto;
}

.font-heading {
  font-family: var(--font-heading), sans-serif;
}

h1, .h1 { font-family: var(--font-heading), sans-serif; font-size: var(--h1-size); font-weight: var(--weight-h1); line-height: 1.1; text-wrap: balance; color: var(--brand-heading); margin-bottom: 1.5rem; max-width: 100%; word-break: break-word; }
h2, .h2 { font-family: var(--font-heading), sans-serif; font-size: var(--h2-size); font-weight: var(--weight-h2); line-height: 1.2; text-wrap: balance; color: var(--brand-heading); margin-bottom: 1.25rem; max-width: 100%; word-break: break-word; }
h3, .h3 { font-family: var(--font-heading), sans-serif; font-size: var(--h3-size); font-weight: var(--weight-h3); line-height: 1.3; text-wrap: balance; color: var(--brand-heading); margin-bottom: 1rem; max-width: 100%; word-break: break-word; }

/* Backgrounds */
.site-background {
  position: relative;
  isolation: isolate;
}

.site-background::before,
.site-background::after {
  content: "";
  position: fixed;
  z-index: -1;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(14px);
}

.site-background::before {
  top: 5rem;
  right: -10rem;
  height: 30rem;
  width: 30rem;
  background: radial-gradient(circle, rgba(94, 114, 255, 0.08) 0%, rgba(94, 114, 255, 0) 70%);
}

.site-background::after {
  left: -8rem;
  bottom: 8rem;
  height: 24rem;
  width: 24rem;
  background: radial-gradient(circle, rgba(31, 35, 95, 0.06) 0%, rgba(31, 35, 95, 0) 70%);
}

.dark .site-background::before {
  background: radial-gradient(circle, rgba(94, 114, 255, 0.1) 0%, rgba(94, 114, 255, 0) 70%);
}

.dark .site-background::after {
  background: radial-gradient(circle, rgba(75, 86, 210, 0.08) 0%, rgba(75, 86, 210, 0) 70%);
}

/* Sections & Spacing System */
.section-shell {
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  /* Mobile (320px-767px) */
  padding: clamp(4.5rem, 15vw, 5.5rem) 1.25rem;
}

@media (min-width: 768px) {
  .section-shell {
    padding: clamp(5.5rem, 10vw, 6.5rem) 2rem;
  }
}

@media (min-width: 1024px) {
  .section-shell {
    padding: clamp(6.5rem, 8vw, 8rem) 3rem;
  }
}

@media (min-width: 1440px) {
  .section-shell {
    padding: clamp(8rem, 10vw, 10rem) 4rem;
  }
}

@media (min-width: 1600px) {
  .section-shell {
    max-width: 1600px;
    padding: clamp(10rem, 10vw, 12.5rem) 5rem;
  }
}

/* Premium Card */
.premium-card {
  border: 1px solid var(--brand-line);
  border-radius: 2rem;
  background-color: var(--brand-surface);
  box-shadow: var(--shadow-premium);
  padding: 1.5rem;
  transition: transform 350ms ease, box-shadow 350ms ease, border-color 350ms ease;
  backdrop-filter: blur(14px);
}

@media (min-width: 768px) {
  .premium-card { padding: 2rem; }
}

@media (min-width: 1024px) {
  .premium-card { padding: 2.5rem; }
  
  .premium-card:hover {
    transform: translateY(-8px);
    border-color: var(--brand-accent);
    box-shadow: 0 28px 80px -12px rgba(31, 35, 95, 0.15), 0 0 0 1px var(--brand-accent);
  }

  .dark .premium-card:hover {
    background-color: color-mix(in srgb, var(--brand-surface) 95%, white 5%);
    box-shadow: 0 28px 80px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px var(--brand-accent);
  }
}

@media (min-width: 1440px) {
  .premium-card { padding: 3rem; }
}

@media (min-width: 1920px) {
  .premium-card { padding: 3.5rem; border-radius: 2.5rem; }
}

/* Buttons */
.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  border-radius: 999px;
  padding: 1rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  transition: transform 180ms ease, background-color 180ms ease, color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.primary-button {
  background: var(--brand-button);
  color: var(--brand-white);
  box-shadow: 0 8px 24px -6px rgba(31, 35, 95, 0.3);
}

.primary-button:hover {
  transform: translateY(-2px);
  background: var(--brand-button-hover);
  box-shadow: 0 12px 32px -8px rgba(31, 35, 95, 0.4);
}

.secondary-button {
  border: 1px solid var(--brand-button);
  background: transparent;
  color: var(--brand-button);
}

.secondary-button:hover {
  transform: translateY(-2px);
  border-color: var(--brand-button-hover);
  background: var(--brand-button-hover);
  color: var(--brand-white);
}

/* Components */
.detail-chip {
  border: 1px solid var(--brand-line);
  border-radius: 1.5rem;
  background-color: var(--brand-surface);
  padding: 1.25rem;
}

.detail-chip-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brand-secondary);
}

.detail-chip-value {
  margin-top: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--brand-text);
  font-weight: 500;
}

.cta-banner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid var(--brand-line);
  border-radius: 2rem;
  background-color: var(--brand-surface);
  padding: 2.5rem;
  box-shadow: var(--shadow-premium);
}

@media (min-width: 1024px) {
  .cta-banner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4rem;
  }
}

.form-input {
  width: 100%;
  border: 1px solid var(--brand-line);
  border-radius: 1rem;
  background-color: var(--brand-surface);
  padding: 1rem 1.25rem;
  color: var(--brand-text);
  outline: none;
  font-family: var(--font-body);
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

.form-input:focus {
  border-color: var(--brand-accent);
  box-shadow: 0 0 0 4px rgba(94, 114, 255, 0.15);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'app', 'globals.css'), cssContent);
console.log('globals.css updated with responsive typography and spacing system.');
