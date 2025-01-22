import React from 'react';
import './hero.css';
import hero1 from '../../assets/wonderlane-6zlgM-GUd6I-unsplash.jpg';

// data for dynamic rendering
const heroSections = [
  {
    title: "Academic Counseling",
    description: "Making informed decisions about your future is crucial. We help you analyze your options and provide meaningful advice.",
    imgSrc: "https://img.freepik.com/free-photo/students-talking-street-smiling_23-2147657120.jpg",
    buttons: ["Book an appointment with us", "How we can Help"],
    reverse: false, // Controls the layout
  },
  {
    title: "Universities",
    description: "There is always a country and university that is suited for you. That is why we are here to help you find the most appropriate direction and set you on the correct course for your future.",
    imgSrc: "https://cdn.pixabay.com/photo/2013/05/09/22/08/hamburg-110161_640.jpg",
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
