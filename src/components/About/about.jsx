import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>Welcome to IDE SCHOLARS LIMITED.<br/>
        We help students find the perfect<br/> 
        <span className="highlight">study abroad programs and navigate the <br/>
        application process smoothly.</span></p>
        
        {/* Call-to-Action Button */}
        <a href="#contact" className="cta-button">
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default About;