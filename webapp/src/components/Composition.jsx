import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Composition.css';
import { translations } from '../translations';

const Composition = ({ lang }) => {
  const t = translations[lang].composition;
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);

  const handlePrev = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : t.ingredients.length - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev < t.ingredients.length - 1 ? prev + 1 : 0));
  };

  // Scroll to active item in list automatically without scrolling the window
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.children[activeIndex];
      if (activeElement) {
        listRef.current.scrollTo({
          top: activeElement.offsetTop - listRef.current.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const activeIngredient = t.ingredients[activeIndex];

  return (
    <section id="composition" className="comp-section">
      <div className="comp-card">
        
        {/* Left Side: List */}
        <div className="comp-left">
          <h2 className="comp-title">{t.title}</h2>
          <p className="comp-subtitle">{t.subtitle}</p>
          
          <div className="comp-list-container" ref={listRef}>
            {t.ingredients.map((item, index) => (
              <div 
                key={index} 
                className={`comp-list-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="comp-item-name">{item.name}</span>
                <span className="comp-item-dots"></span>
                <span className="comp-item-qty">{item.qty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Carousel */}
        <div className="comp-right">
          <button className="comp-carousel-arrow left" onClick={handlePrev}>
            <ChevronLeft size={32} />
          </button>

          <div className="comp-carousel-container" key={activeIndex}>
            
            <div className="comp-carousel-image-wrapper">
              <img 
                src={activeIngredient.img.includes('.svg') ? activeIngredient.img : `/ingredients_images/${activeIngredient.img}`} 
                alt={activeIngredient.name} 
                className="comp-carousel-image"
              />
            </div>
            
            <h3 className="comp-carousel-title">{activeIngredient.name.split('(')[0].trim()}</h3>
            <p className="comp-carousel-desc">{activeIngredient.desc}</p>
            
            <div className="comp-carousel-indicators">
              {t.ingredients.map((_, i) => (
                <span 
                  key={i} 
                  className={`comp-indicator-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                ></span>
              ))}
            </div>

          </div>

          <button className="comp-carousel-arrow right" onClick={handleNext}>
            <ChevronRight size={32} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Composition;
