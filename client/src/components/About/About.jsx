import './About.css';

import React from 'react';

const About = () => {
  return (
    <div className="container">
      <section className="about-section">
        <div className="about-header">
          <h1>About Drive Deals</h1>
          <p>Bringing quality vehicles and exceptional service to our community since 2005.</p>
        </div>
        
        <div className="about-content">
          <div className="about-story">
            <h2>Our Story</h2>
            <p>Premium Auto Sales was founded with one simple mission: to provide high-quality, reliable vehicles with transparent pricing and exceptional customer service.</p>
            <p>Starting with just five cars in a small lot, we've grown to become the region's most trusted dealership with hundreds of satisfied customers who return to us time and again.</p>
            <p>Our commitment to excellence has never wavered. We personally inspect every vehicle that comes through our doors, ensuring that we only sell cars we would be proud to drive ourselves.</p>
          </div>
          
          
        </div>
        
        <div className="about-cta">
          <h2>Ready to Find Your Next Car?</h2>
          <p>Click below to see all cars that are up for sale.</p>
          <a href="/all-cars" className="cta-button">All cars available</a>
        </div>
      </section>
    </div>
  );
};

export default About;