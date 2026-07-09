const fs = require('fs');
const path = require('path');

const cssDir = 'c:/Users/emera/Downloads/Isshaliv/webapp/src/components';

const updates = {
  'Navbar.css': `
@media (max-width: 768px) {
  .navbar { padding: 1rem 5%; }
  .nav-menu { display: none; }
}`,
  'Hero.css': `
@media (max-width: 768px) {
  .hero-content { flex-direction: column; text-align: center; padding-top: 5rem; }
  .hero-text { max-width: 100%; margin-bottom: 2rem; }
  .hero-title { font-size: 3rem; }
  .hero-image { max-width: 80%; }
  .cta-buttons { justify-content: center; flex-wrap: wrap; }
}`,
  'About.css': `
@media (max-width: 768px) {
  .about-section { padding: 5rem 5% 3rem; min-height: auto; }
  .about-title { font-size: 2.5rem; }
  .about-content { flex-direction: column; }
  .side-images { display: none; }
  .about-text { max-width: 100%; text-align: center; }
}`,
  'WhenToUse.css': `
@media (max-width: 768px) {
  .when-section { padding: 5rem 5% 3rem; min-height: auto; }
  .when-title { font-size: 2.5rem; }
  .conditions-grid { grid-template-columns: 1fr; gap: 1.5rem; }
}`,
  'WhyIsshaliv.css': `
@media (max-width: 768px) {
  .why-section { padding: 5rem 5% 3rem; min-height: auto; }
  .why-title { font-size: 2.5rem; }
  .steps-container { flex-direction: column; gap: 2rem; align-items: center; }
  .connection-arrow { display: none; }
}`,
  'HowItWorks.css': `
@media (max-width: 768px) {
  .how-section { padding: 5rem 5% 3rem; min-height: auto; }
  .how-content { flex-direction: column; gap: 3rem; text-align: center; }
  .how-text-block { max-width: 100%; align-items: center; }
  .sci-points { align-items: center; }
}`,
  'Composition.css': `
@media (max-width: 768px) {
  .composition-section { padding: 5rem 5% 3rem; min-height: auto; }
  .comp-title { font-size: 2.5rem; }
  .comp-content { flex-direction: column; gap: 2rem; }
  .comp-visual, .comp-list { width: 100%; height: auto; }
  .comp-list { max-height: 50vh; overflow-y: auto; }
}`,
  'Usage.css': `
@media (max-width: 768px) {
  .usage-section { padding: 5rem 5% 3rem; min-height: auto; }
  .usage-title { font-size: 2.5rem; }
  .usage-tabs { flex-wrap: wrap; justify-content: center; gap: 0.5rem; }
  .indications-grid { grid-template-columns: 1fr; }
  .dosage-content { flex-direction: column; }
  .dosage-text-block { max-width: 100%; }
}`,
  'ImagesSection.css': `
@media (max-width: 768px) {
  .images-section { padding: 5rem 5% 3rem; min-height: auto; }
  .images-title { font-size: 2.5rem; }
  .carousel-wrapper { flex-direction: column; gap: 1rem; }
  .canvas-container { width: 100%; height: 50vh; }
  .img-nav-arrow { width: 40px; height: 40px; }
  .fullscreen-img { width: 100vw; height: auto; }
}`,
  'FooterSection.css': `
@media (max-width: 768px) {
  .footer-section { min-height: auto; }
  .cta-container { padding: 4rem 2rem; }
  .cta-tagline { font-size: 2rem; }
  .footer-columns { flex-direction: column; gap: 2rem; align-items: center; text-align: center; }
  .main-footer { padding: 2rem; flex-direction: column; gap: 2rem; }
  .back-to-top-btn { position: static; margin-top: 1rem; }
}`
};

for (const [file, content] of Object.entries(updates)) {
  fs.appendFileSync(path.join(cssDir, file), content + '\n');
}
console.log('Mobile CSS applied successfully.');
