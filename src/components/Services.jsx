import React from 'react'

const Services = () => {
  const services = [
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications using React Native for iOS and Android.'
    },
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Modern, responsive web applications built with React and cutting-edge technologies.'
    },
    {
      icon: '☁️',
      title: 'Azure Cloud Engineering',
      description: 'Scalable cloud solutions and infrastructure on Microsoft Azure platform.'
    },
    {
      icon: '⚡',
      title: 'Full-Stack Development',
      description: 'End-to-end development using C# backend and React frontend technologies.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive development services to bring your digital vision to life
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

