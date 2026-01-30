import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in-up">
            Building Digital Excellence
            <span className="gradient-text"> One App at a Time</span>
          </h1>
          <p className="hero-subtitle fade-in-up">
            We develop cutting-edge mobile and web applications using modern technologies.
            Transforming ideas into powerful digital solutions.
          </p>
          <div className="hero-buttons fade-in-up">
            <a href="#projects" className="btn btn-primary">View Our Work</a>
            <a href="#contact" className="btn btn-outline">Get Started</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">📱</div>
            <p>Mobile Apps</p>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🌐</div>
            <p>Web Apps</p>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">☁️</div>
            <p>Cloud Solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

