import React from 'react';
import { ArrowUp } from 'lucide-react';
import { translations } from '../translations';
import './FooterSection.css';

const FooterSection = ({ lang, resetScroll }) => {
  const t = translations[lang].footerSection;

  return (
    <section id="footer-section" className="footer-section">
      <div className="cta-container">
        <h2 className="cta-tagline">
          {t.taglinePart1}
          <span className="highlight-orange">{t.taglineHighlight1}</span>
          {t.taglinePart2}
          <span className="highlight-orange">{t.taglineHighlight2}</span>
          {t.taglinePart3}
          <span className="highlight-brown">{t.taglineHighlight3}</span>
          {t.taglinePart4}
        </h2>
        <button className="buy-now-btn">
          {t.buyNow}
        </button>
      </div>

      <footer className="main-footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h4 className="footer-title">{t.mfgTitle}</h4>
            <p className="footer-text font-bold">{t.mfgName}</p>
            <p className="footer-text">{t.mfgAddress1}</p>
            <p className="footer-text">{t.mfgAddress2}</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">{t.mktTitle}</h4>
            <p className="footer-text font-bold">{t.mktName}</p>
            <p className="footer-text">{t.mktAddress1}</p>
            <p className="footer-text">{t.mktAddress2}</p>
          </div>
        </div>

        <button className="back-to-top-btn" onClick={resetScroll} title={t.backToTop}>
          <ArrowUp size={24} />
        </button>
      </footer>
    </section>
  );
};

export default FooterSection;
