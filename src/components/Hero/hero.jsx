import React from 'react';
import './hero.css';
import hero1 from '../../assets/wonderlane-6zlgM-GUd6I-unsplash.jpg';
import hero2 from '../../assets/students-talking-street-smiling.jpg';

// data for dynamic rendering
const heroSections = [
  {
    title: "Academic Counseling",
    description: "Making informed decisions about your future is crucial. We help you analyze your options and provide meaningful advice.",
    imgSrc: hero2,
    buttons: ["Book an appointment with us", "How we can Help"],
    reverse: false, // Controls the layout
  },
  {
    title: "Universities",
    description: "There is always a country and university that is suited for you. That is why we are here to help you find the most appropriate direction and set you on the correct course for your future.",
    imgSrc: hero1,
    buttons: ["Get Started", "Learn More"],
    reverse: true,
  },
];

const Hero = () => {
  return (
    <section className="hero">
      {heroSections.map((section, index) => (
        <div
          className={`hero-content ${section.reverse ? "reverse" : ""}`}
          key={index}
        >
          <div className="hero-left">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <div className="hero-buttons">
              {section.buttons.map((buttonText, idx) => (
                <button key={idx}>{buttonText}</button>
              ))}
            </div>
          </div>
          <div className="hero-right">
            <img src={section.imgSrc} alt={section.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
