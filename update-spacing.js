const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Replace the old section-shell spacing logic
const oldSectionShellRegex = /\/\* Sections & Spacing System \*\/[\s\S]*?(?=\/\* Premium Card \*\/)/;

const newSectionShell = `/* Sections & Spacing System */
.section-shell {
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

@media (min-width: 768px) {
  .section-shell {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .section-shell {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

@media (min-width: 1440px) {
  .section-shell {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

@media (min-width: 1600px) {
  .section-shell {
    max-width: 1600px;
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

/* Vertical Rhythm Utilities */
.section-hero {
  padding-top: 6rem;
  padding-bottom: 5rem;
}
.section-about {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.section-services {
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
}
.section-contact {
  padding-top: 4rem;
  padding-bottom: 5rem;
}
.section-footer {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .section-hero {
    padding-top: 8rem;
    padding-bottom: 7rem;
  }
  .section-about {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  .section-services {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
  .section-contact {
    padding-top: 6rem;
    padding-bottom: 7rem;
  }
  .section-footer {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

@media (min-width: 1024px) {
  .section-hero {
    padding-top: 10rem;
    padding-bottom: 9rem;
  }
  .section-about {
    padding-top: 7rem;
    padding-bottom: 8rem;
  }
  .section-services {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }
  .section-contact {
    padding-top: 8rem;
    padding-bottom: 10rem;
  }
  .section-footer {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }
}

@media (min-width: 1440px) {
  .section-hero {
    padding-top: 12rem;
    padding-bottom: 11rem;
  }
  .section-about {
    padding-top: 9rem;
    padding-bottom: 10rem;
  }
  .section-services {
    padding-top: 11rem;
    padding-bottom: 11rem;
  }
  .section-contact {
    padding-top: 10rem;
    padding-bottom: 12rem;
  }
  .section-footer {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

/* Card Padding Refinement */
.card-service { padding: 2rem; }
.card-contact { padding: 1.5rem; }
.card-location { padding: 1.25rem; }
.card-feature { padding: 1rem; }

@media (min-width: 768px) {
  .card-service { padding: 2.5rem; }
  .card-contact { padding: 2rem; }
  .card-location { padding: 1.5rem; }
  .card-feature { padding: 1.25rem; }
}

@media (min-width: 1024px) {
  .card-service { padding: 3rem; }
  .card-contact { padding: 2rem; }
  .card-location { padding: 2rem; }
  .card-feature { padding: 1.25rem; }
}

/* Button Refinement */
.primary-button, .secondary-button {
  padding: 1.125rem 2rem;
  border-radius: 1rem;
}

@media (min-width: 1024px) {
  .primary-button, .secondary-button {
    padding: 1.125rem 2.5rem;
  }
}

.primary-button:hover, .secondary-button:hover {
  transform: translateY(-3px) scale(1.02);
}

`;

cssContent = cssContent.replace(oldSectionShellRegex, newSectionShell);

fs.writeFileSync(cssPath, cssContent);
console.log('Spacings updated successfully in globals.css');
