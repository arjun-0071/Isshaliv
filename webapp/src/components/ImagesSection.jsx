import React, { useState, Suspense, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, ContactShadows, Environment } from '@react-three/drei';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { translations } from '../translations';
import './ImagesSection.css';

const ProductBox = ({ onClick }) => {
  // Three.js BoxGeometry material order: +x(Right), -x(Left), +y(Top), -y(Bottom), +z(Front), -z(Back)
  const textures = useTexture([
    '/right.jpeg',
    '/left.jpeg',
    '/top.jpeg',
    '/bottom.jpeg',
    '/front.jpeg',
    '/back.jpeg'
  ]);

  return (
    <mesh 
      onClick={onClick} 
      castShadow 
      receiveShadow
      onPointerOver={(e) => { document.body.style.cursor = 'pointer'; }}
      onPointerOut={(e) => { document.body.style.cursor = 'auto'; }}
    >
      {/* Dimensions: 594 x 469 x 231 scaled down */}
      <boxGeometry args={[5.94, 4.69, 2.31]} />
      {textures.map((texture, idx) => (
        <meshStandardMaterial key={idx} attach={`material-${idx}`} map={texture} roughness={0.4} metalness={0.1} />
      ))}
    </mesh>
  );
};

const ImagesSection = ({ lang }) => {
  const t = translations[lang].imagesSection;
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesList = [
    '3d',
    '/closed_box.png',
    '/open_box.png',
    '/medicine_bottle.png'
  ];

  useEffect(() => {
    if (isFullScreen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isFullScreen]);

  const toggleFullScreen = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setIsFullScreen(!isFullScreen);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? imagesList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === imagesList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="images-section" className="images-section">
      <div className="images-header">
        <h2 className="images-title">
          <span style={{ color: 'var(--accent-orange)' }}>{t.titlePart1}</span>
          {t.titleHighlight}
        </h2>
        <p className="images-instruction">{t.instruction}</p>
      </div>

      <div className="carousel-wrapper">
        <button className="img-nav-arrow left" onClick={handlePrev}>
          <ChevronLeft size={32} />
        </button>

        <div className="canvas-container">
          {imagesList[currentIndex] === '3d' ? (
            <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
              <Environment preset="city" />
              <Suspense fallback={null}>
                <ProductBox onClick={toggleFullScreen} />
              </Suspense>
              <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                autoRotate 
                autoRotateSpeed={1.5} 
              />
              <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
            </Canvas>
          ) : (
            <img 
              src={imagesList[currentIndex]} 
              alt="Product View" 
              className="static-carousel-img"
            />
          )}
        </div>

        <button className="img-nav-arrow right" onClick={handleNext}>
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Full Screen Modal via Portal */}
      {createPortal(
        <div className={`fullscreen-modal ${isFullScreen ? 'active' : ''}`}>
          <button className="close-modal-btn" onClick={toggleFullScreen}>
            <X size={32} />
          </button>
          {isFullScreen && (
            <div className="fullscreen-canvas-wrapper">
              <Canvas camera={{ position: [0, 2, 10], fov: 50 }} onPointerMissed={toggleFullScreen}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Environment preset="city" />
                <Suspense fallback={null}>
                  <ProductBox />
                </Suspense>
                <OrbitControls 
                  enableZoom={true} 
                  enablePan={true} 
                  autoRotate={false} 
                />
              </Canvas>
            </div>
          )}
        </div>,
        document.body
      )}
    </section>
  );
};

export default ImagesSection;
