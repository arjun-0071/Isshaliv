import React from 'react';
import './About.css';
import { Activity, Sprout, ShieldCheck } from 'lucide-react';
import { translations } from '../translations';

const About = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <span className="about-overtitle">{t.overtitle}</span>
        <h2 className="about-title">{t.titlePart1}<br/>{t.titlePart2}<span className="highlight-orange">{t.capsule}</span></h2>
        <p className="about-description">
          {t.description}
        </p>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <div className="card-icon-wrapper orange-bg">
            <Activity size={32} />
          </div>
          <div className="card-content">
            <h3 className="card-title">{t.card1Title}</h3>
            <p className="card-text">{t.card1Text}</p>
          </div>
        </div>

        <div className="about-card">
          <div className="card-icon-wrapper yellow-bg">
            <Sprout size={32} />
          </div>
          <div className="card-content">
            <h3 className="card-title">{t.card2Title}</h3>
            <p className="card-text">{t.card2Text}</p>
          </div>
        </div>

        <div className="about-card">
          <div className="card-icon-wrapper red-bg">
            <ShieldCheck size={32} />
          </div>
          <div className="card-content">
            <h3 className="card-title">{t.card3Title}</h3>
            <p className="card-text">{t.card3Text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
