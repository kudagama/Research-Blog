import React, { useEffect } from 'react';
import { researchData } from '../data/researchData';

const ResearchList = ({ onResearchSelect }) => {
  useEffect(() => {
    // Add scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.research-card');
    cards.forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="page-title">
        <h1>Our Research Projects</h1>
        <p>Discover our latest research initiatives and innovative solutions</p>
      </div>
      <div className="research-grid">
        {researchData.map((research, index) => (
          <div 
            key={index} 
            className="research-card scroll-reveal"
            onClick={() => onResearchSelect(research)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={research.coverImage} 
              alt={research.title}
              className="research-card-image"
            />
            <div className="research-card-content">
              <h3>{research.title}</h3>
              <p>{research.description}</p>
              <div className="research-meta">
                <span className="research-date">{research.date}</span>
                <span className="research-category">{research.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchList; 