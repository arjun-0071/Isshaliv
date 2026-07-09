import React, { useState } from 'react';
import './HowItWorks.css';
import { translations } from '../translations';
import { ShieldAlert, Droplets, HeartPulse, Activity, Zap, ShieldCheck } from 'lucide-react';

const icons = [
  <ShieldAlert size={24} />,
  <HeartPulse size={24} />,
  <Activity size={24} />,
  <Droplets size={24} />,
  <Zap size={24} />,
  <ShieldCheck size={24} />
];

// Angles for 6 nodes, starting from top (-90 degrees)
const angles = [-90, -30, 30, 90, 150, 210];
const RADIUS = 190; // Distance from center

const HowItWorks = ({ lang }) => {
  const t = translations[lang].howItWorks;
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  // Convert angle to X, Y coordinates
  const getCoordinates = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: RADIUS * Math.cos(rad),
      y: RADIUS * Math.sin(rad)
    };
  };

  return (
    <section id="how-it-works" className="how-section">
      <div className="how-header">
        <h2 className="how-title">
          <span style={{ color: 'var(--accent-orange)' }}>{t.titlePart1}</span>
          <span style={{ color: '#4a3028' }}>{t.titleHighlight}</span>
          <span style={{ color: 'var(--accent-orange)' }}>{t.titlePart3}</span>
        </h2>
      </div>

      <div className="how-content">
        {/* Left Side: Interactive Hub Diagram */}
        <div className="diagram-container">
          {/* SVG Connecting Lines */}
          <svg className="diagram-lines" viewBox="-300 -300 600 600">
            {angles.map((angle, i) => {
              const { x, y } = getCoordinates(angle);
              const isActive = activeIndex === i;
              const isHovered = hoverIndex === i && !isActive;
              return (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={x}
                  y2={y}
                  className={`connection-line ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                />
              );
            })}
          </svg>

          {/* Central Hub */}
          <div className="center-hub">
            <div className="center-pulse"></div>
            <img src="/placeholder.svg" alt="Isshaliv Capsule" className="center-image" />
          </div>

          {/* Orbiting Nodes */}
          {t.nodes.map((node, i) => {
            const { x, y } = getCoordinates(angles[i]);
            const isActive = activeIndex === i;
            const isHovered = hoverIndex === i && !isActive;
            
            return (
              <div
                key={i}
                className={`diagram-node ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => setActiveIndex(i)}
              >
                <div className="node-icon-wrapper">
                  {icons[i]}
                </div>
                <div className="node-label">{node.title}</div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Reading Pane */}
        <div className="reading-pane">
          <div className="reading-content" key={activeIndex}>
            <div className="reading-icon">
              {icons[activeIndex]}
            </div>
            <h3 className="reading-title">{t.nodes[activeIndex].title}</h3>
            <p className="reading-desc">{t.nodes[activeIndex].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
