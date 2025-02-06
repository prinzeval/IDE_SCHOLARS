import React from 'react';
import './footer.css';
import footerlogo from '../../assets/PNG/Logo Secondary White.png'
import divide_logo2 from '../../assets/PNG/Logo Primary white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={footerlogo} alt="Footer Logo" />
        <img src={divide_logo2} alt="Divide Logo Black" className="div-logo logo2" />
      </div>
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Regions</h4>
          <ul>
            <li>Africa</li>
            <li>Asia</li>
            <li>Australia/Oceania</li>
            <li>Europe</li>
            <li>North America</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>ICEF Monitor</h4>
          <ul>
            <li>About Us</li>
            <li>Advertising</li>
            <li>Sponsored Articles</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
