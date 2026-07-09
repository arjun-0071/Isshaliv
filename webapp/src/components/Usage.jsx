import React, { useState } from 'react';
import { Activity, ShieldCheck, RefreshCw, Zap, CheckCircle2 } from 'lucide-react';
import './Usage.css';
import { translations } from '../translations';

const indicationIcons = [
  <Activity size={24} className="ind-icon-svg" />,
  <RefreshCw size={24} className="ind-icon-svg" />,
  <Zap size={24} className="ind-icon-svg" />,
  <ShieldCheck size={24} className="ind-icon-svg" />
];

const Usage = ({ lang }) => {
  const t = translations[lang].usage;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="usage" className="usage-section">
      <div className="usage-header">
        <h2 className="usage-title">
          <span style={{ color: 'var(--accent-orange)' }}>{t.titlePart1}</span>
          {t.titleHighlight}
        </h2>
      </div>

      {/* Sub Navbar */}
      <div className="usage-nav">
        {t.tabs.map((tab, idx) => (
          <button 
            key={idx}
            className={`usage-tab-btn ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="usage-content-wrapper">
        <div className="usage-content-card">
          
          {/* Tab 0: Indications */}
          {activeTab === 0 && (
            <div className="usage-tab-content slide-up">
              <div className="indications-grid">
                {t.indications.map((ind, idx) => (
                  <div key={idx} className="indication-card">
                    <div className="ind-icon-wrapper">
                      {indicationIcons[idx]}
                    </div>
                    <div className="ind-text">
                      <h4 className="ind-title">{ind.title}</h4>
                      <p className="ind-desc">{ind.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 1: Dosage & Administration */}
          {activeTab === 1 && (
            <div className="usage-tab-content slide-up dosage-tab">
              <h3 className="dosage-heading">{t.dosage.heading1}</h3>
              <div className="dosage-box">
                <CheckCircle2 size={24} color="#65a30d" className="dosage-check" />
                <span className="dosage-amount">{t.dosage.amount}</span>
              </div>

              <h3 className="dosage-heading">{t.dosage.heading2}</h3>
              <div className="method-grid">
                {t.dosage.steps.map((step, idx) => (
                  <div key={idx} className="method-step-card">
                    <div className="step-num">{step.num}</div>
                    <p className="step-text">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Safety & Precautions */}
          {activeTab === 2 && (
            <div className="usage-tab-content slide-up safety-tab">
              
              <div className="safety-section">
                <h4 className="safety-label">{t.safety.contraLabel}</h4>
                <p className="safety-text">{t.safety.contra}</p>
              </div>

              <div className="safety-alert yellow-alert">
                <h4 className="safety-label">{t.safety.precautionsLabel}</h4>
                <p className="safety-text">{t.safety.precautions}</p>
              </div>

              <div className="safety-alert red-alert">
                <h4 className="safety-label">{t.safety.overdoseLabel}</h4>
                <p className="safety-text">{t.safety.overdose}</p>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Usage;
