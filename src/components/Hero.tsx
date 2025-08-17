import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Advanced Software
            <span className="highlight"> Development</span>
          </h1>
          <p className="hero-subtitle">
            Empowering businesses with cutting-edge software solutions. 
            Specializing in automation, data processing, and data streaming & storage 
            to drive digital transformation.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <span>Automation</span>
            </div>
            <div className="floating-card card-2">
              <span>Data</span>
            </div>
            <div className="floating-card card-3">
              <span>Streaming</span>
            </div>
            <div className="floating-card card-4">
              <span>Storage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
