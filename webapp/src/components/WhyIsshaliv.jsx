import React, { useState } from 'react';
import './WhyIsshaliv.css';
import { translations } from '../translations';
import { Leaf, Microscope, Zap, Heart, Shield, RefreshCw, ChevronLeft, ChevronRight, ShieldPlus, BatteryCharging, Award } from 'lucide-react';

const icons = [
  <Leaf size={22} />,
  <Microscope size={22} />,
  <Zap size={22} />,
  <Heart size={22} />,
  <Shield size={22} />,
  <RefreshCw size={22} />,
  <ShieldPlus size={22} />,
  <BatteryCharging size={22} />,
  <Award size={22} />
];

const WhyIsshaliv = ({ lang }) => {
  const t = translations[lang].whyIsshaliv;
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => setRotation(prev => prev + 40);
  const rotateRight = () => setRotation(prev => prev - 40);

  const getActiveIndex = () => {
    let index = Math.round(-rotation / 40) % 9;
    if (index < 0) index += 9;
    return index;
  };
  
  const activeIndex = getActiveIndex();
  const leftIndex = (activeIndex - 1 + 9) % 9;
  const rightIndex = (activeIndex + 1) % 9;
  
  const isVisible = (i) => i === activeIndex || i === leftIndex || i === rightIndex;

  return (
    <section id="why-isshaliv" className="why-section">
      <div className="why-header">
        <h2 className="why-title">
          <span style={{ color: 'var(--accent-orange)' }}>{t.titlePart1}</span>
          {t.titleHighlight}
        </h2>
      </div>

      <div className="carousel-container">
        <button className="carousel-btn left-btn" onClick={rotateLeft}>
          <ChevronLeft size={40} />
        </button>

        <div className="scene">
          <div 
            className="carousel" 
            style={{ transform: `rotateY(${rotation}deg)` }}
          >
            {t.cards.map((card, i) => (
              <div 
                key={i} 
                className="carousel-card-wrapper"
                style={{ 
                  transform: `rotateY(${i * 40}deg) translateZ(440px)`,
                  opacity: isVisible(i) ? 1 : 0,
                  pointerEvents: isVisible(i) ? 'auto' : 'none',
                  transition: 'opacity 0.4s ease'
                }}
              >
                <div className="why-card">
                  <div className="why-icon">
                    {icons[i]}
                  </div>
                  <h3 className="why-card-title">{card.title}</h3>
                  <p className="why-card-desc">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn right-btn" onClick={rotateRight}>
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
};

export default WhyIsshaliv;
