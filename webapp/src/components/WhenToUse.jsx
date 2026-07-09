import React from 'react';
import './WhenToUse.css';
import { translations } from '../translations';
import { ShieldAlert, AlertTriangle, Frown, Activity } from 'lucide-react';

const icons = [
  <Activity size={32} />,
  <AlertTriangle size={32} />,
  <Frown size={32} />,
  <ShieldAlert size={32} />
];

const WhenToUse = ({ lang }) => {
  const t = translations[lang].whenToUse;

  return (
    <section id="when-to-use" className="when-section">
      <div className="when-left">
        <h2 className="when-title">
          {t.titlePart1}
          <span className="when-highlight">{t.titleHighlight}</span>
        </h2>
      </div>
      
      <div className="when-right">
        <div className="problems-grid">
          {t.cards.map((card, index) => (
            <div className="problem-card" key={index}>
              <div className="problem-icon">
                {icons[index]}
              </div>
              <div className="problem-content">
                <h3 className="problem-title">{card.title}</h3>
                <p className="problem-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenToUse;
