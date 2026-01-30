import React from 'react'

const Technologies = () => {
  const techs = [
    { name: 'C#', color: '#239120' },
    { name: 'React', color: '#61dafb' },
    { name: 'React Native', color: '#61dafb' },
    { name: 'HTML5', color: '#e34c26' },
    { name: 'CSS3', color: '#264de4' },
    { name: 'Azure', color: '#0078d4' }
  ]

  return (
    <section id="technologies" className="technologies">
      <div className="container">
        <h2 className="section-title">Technologies We Use</h2>
        <p className="section-subtitle">
          We leverage the latest technologies to build scalable and efficient solutions
        </p>
        <div className="tech-grid">
          {techs.map((tech, index) => (
            <div key={index} className="tech-card" style={{ '--tech-color': tech.color }}>
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies

