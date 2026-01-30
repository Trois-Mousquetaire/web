import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Trois Mousquetaire</h3>
            <p>Building digital excellence through innovative mobile and web solutions.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Mobile App Development</li>
              <li>Web Application Development</li>
              <li>Cloud Engineering</li>
              <li>Full-Stack Solutions</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul>
              <li>C#</li>
              <li>React</li>
              <li>React Native</li>
              <li>Azure</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Ready to start your project?</p>
            <a href="mailto:contact@troismousquetaire.com" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Trois Mousquetaire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

