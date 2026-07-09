import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhenToUse from './components/WhenToUse';
import WhyIsshaliv from './components/WhyIsshaliv';
import HowItWorks from './components/HowItWorks';
import Composition from './components/Composition';
import Usage from './components/Usage';
import ImagesSection from './components/ImagesSection';
import FooterSection from './components/FooterSection';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const isMobileRef = useRef(false);
  const TOTAL_SECTIONS = 9;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      isMobileRef.current = mobile;
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en');
  };

  const resetScroll = () => {
    setCurrentSection(0);
  };

  const handleLearnMore = () => {
    if (isMobile) {
      const sections = document.querySelectorAll('.section-wrapper');
      if (sections[1]) {
        sections[1].scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentSection(1);
    }
  };

  const handleScroll = (direction) => {
    if (isScrolling.current) return;
    
    if (direction === 'down' && currentSection < TOTAL_SECTIONS - 1) {
      isScrolling.current = true;
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'up' && currentSection > 0) {
      isScrolling.current = true;
      setCurrentSection(prev => prev - 1);
    }

    if (isScrolling.current) {
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const onWheel = (e) => {
      if (isMobileRef.current) return;
      if (document.body.classList.contains('no-scroll')) return;
      if (e.deltaY > 0) handleScroll('down');
      else if (e.deltaY < 0) handleScroll('up');
    };

    const onTouchStart = (e) => {
      if (isMobileRef.current) return;
      if (document.body.classList.contains('no-scroll')) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (isMobileRef.current) return;
      if (document.body.classList.contains('no-scroll')) return;
      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) handleScroll('down');
        else handleScroll('up');
      }
    };

    if (!isMobileRef.current) {
      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('touchstart', onTouchStart, { passive: false });
      window.addEventListener('touchmove', onTouchMove, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [currentSection]);

  return (
    <div className="app-container">
      <Navbar lang={lang} toggleLang={toggleLang} />
      <main 
        className={`sections-container ${isMobile ? 'native-scroll' : ''}`}
        style={isMobile ? {} : { transform: `translateY(-${currentSection * 100}vh)` }}
      >
        <div className="section-wrapper">
          <Hero lang={lang} onLearnMore={handleLearnMore} />
        </div>
        <div className="section-wrapper">
          <About lang={lang} />
        </div>
        <div className="section-wrapper">
          <WhenToUse lang={lang} />
        </div>
        <div className="section-wrapper">
          <WhyIsshaliv lang={lang} />
        </div>
        <div className="section-wrapper">
          <HowItWorks lang={lang} />
        </div>
        <div className="section-wrapper">
          <Composition lang={lang} />
        </div>
        <div className="section-wrapper">
          <Usage lang={lang} />
        </div>
        <div className="section-wrapper">
          <ImagesSection lang={lang} />
        </div>
        <div className="section-wrapper">
          <FooterSection lang={lang} resetScroll={resetScroll} />
        </div>
      </main>
    </div>
  );
}

export default App;
