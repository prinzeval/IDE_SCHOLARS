import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/PNG/Logo Secondary Master.png';
import Hamburger from 'hamburger-react'


const Navbar = () => {
  const [isOpen, setOpen] = useState(false);


  return (
    <nav className="navbar">
      <img src={logo} alt='logo' className='logo'></img>
      <div className="menu-icon">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <ul className = {isOpen ? 'nav-menu active' : 'nav-menu'}>
        <li><a href="#about" onClick = {() => setOpen(false)}>ABOUT</a></li>
        <li><a href="#services" onClick ={() => setOpen(false)}>OUR SERVICES</a></li>
        <li><a href="#countries"onClick ={() => setOpen(false)}>COUNTRIES</a></li>
        <li><a href="#testimonials"onClick ={() => setOpen(false)}>TESTIMONIALS</a></li>
        <li><a href="#contact"onClick ={() => setOpen(false)}>CONTACT US</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
