import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero_section_image.png';
import { Activity, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import { translations } from '../translations';

const Hero = ({ lang, onLearnMore }) => {
  const t = translations[lang].hero;

  return (
    <section className="hero">
      <div className="hero-background-glow"></div>
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">ISSHALIV</h1>
          <h2 className="hero-subtitle">{t.supportYour}<span className="highlight-orange">{t.liver}</span>{t.supportLife}</h2>
          <p className="hero-description">
            {t.description}
          </p>
          
          <div className="hero-features">
            <div className="feature">
              <div className="feature-icon-wrapper">
                 <Activity size={28} color="var(--accent-orange)" />
              </div>
              <p>{t.liverSupport[0]}<br/>{t.liverSupport[1]}</p>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                 <Leaf size={28} color="var(--accent-orange)" />
              </div>
              <p>{t.naturalIngredients[0]}<br/>{t.naturalIngredients[1]}</p>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                 <ShieldCheck size={28} color="var(--accent-orange)" />
              </div>
              <p>{t.safeEffective[0]}<br/>{t.safeEffective[1]}</p>
            </div>
          </div>

          <button className="btn-learn-more" onClick={onLearnMore}>
            {t.learnMore} <ArrowRight className="arrow" size={20} />
          </button>
        </div>

        <div className="hero-image-container">
          <div className="image-glow"></div>
          <img src={heroImage} alt="Isshaliv Liver Capsules" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
