import React, { useEffect } from 'react';
import ImageGallery from './ImageGallery';

const ResearchDetail = ({ research, onBack }) => {
  useEffect(() => {
    // Add scroll reveal animations for sections
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

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const renderPoints = (points) => {
    if (!points || !Array.isArray(points)) return null;
    return (
      <ul className="research-points">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    );
  };

  const renderSteps = (steps) => {
    if (!steps || !Array.isArray(steps)) return null;
    return (
      <ol className="research-steps">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    );
  };

  const renderComponents = (components) => {
    if (!components || !Array.isArray(components)) return null;
    return (
      <div className="components-list">
        <h4>System Components:</h4>
        <ul className="research-points">
          {components.map((component, index) => (
            <li key={index}>{component}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderBenefits = (benefits) => {
    if (!benefits || !Array.isArray(benefits)) return null;
    return (
      <div className="benefits-list">
        <h4>Key Benefits:</h4>
        <ul className="research-points">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="research-detail">
      <button className="back-button" onClick={onBack}>
        ← Back to Research List
      </button>
      
      <div className="research-header">
        <h1 className="research-title">{research.title}</h1>
        <p className="research-subtitle">{research.subtitle}</p>
        <div className="research-meta-detail">
          <span>📅 {research.date}</span>
          <span>🏷️ {research.category}</span>
          <span>⏱️ {research.duration}</span>
        </div>
      </div>

      <div className="section scroll-reveal">
        <h2>📋 Introduction</h2>
        <p>{research.introduction}</p>
      </div>

      {research.evidence && (
        <div className="section scroll-reveal">
          <h2>📸 Evidence from Our Visit</h2>
          <p>{research.evidence.description}</p>
          {renderPoints(research.evidence.points)}
          <ImageGallery images={research.evidence.images} />
        </div>
      )}

      <div className="section scroll-reveal">
        <h2>🔬 Our Research</h2>
        <p>{research.research}</p>
        {renderPoints(research.researchPoints)}
      </div>

      <div className="section scroll-reveal">
        <h2>💡 Our Proposed Solution</h2>
        <p>{research.solution}</p>
        {renderSteps(research.solutionSteps)}
       
      </div>

      {research.solutionImages && (
        <div className="section scroll-reveal">
          <h2>🖼️ Images of Our Solution</h2>
          <ImageGallery images={research.solutionImages} />
           {renderComponents(research.components)}
        </div>
      )}

      <div className="section scroll-reveal">
        <h2>✅ Conclusion</h2>
        <p>{research.conclusion}</p>
        {renderBenefits(research.benefits)}
      </div>
    </div>
  );
};

export default ResearchDetail; 