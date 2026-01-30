import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          We are Trois Mousquetaire, a team of passionate developers dedicated to creating exceptional digital experiences.
        </p>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At Trois Mousquetaire, we believe in the power of technology to transform businesses. 
              We specialize in developing robust mobile and web applications that drive innovation 
              and deliver exceptional user experiences.
            </p>
            <h3>What We Do</h3>
            <p>
              From concept to deployment, we work closely with our clients to understand their vision 
              and bring it to life. Our expertise spans across mobile app development, web applications, 
              and cloud engineering solutions.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

