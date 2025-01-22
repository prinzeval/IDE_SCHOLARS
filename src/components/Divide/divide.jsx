import React from 'react';
import './divide.css';
import divide_logo1 from '../../assets/PNG/Logo Primary Master.png';
import divide_logo2 from '../../assets/PNG/Logo Primary Master.png';

const Divide = () => {
  return (
    <div className="divide-content">
      <img src={divide_logo1} alt="Divide Logo Teal" className="div-logo logo1" />
      <img src={divide_logo2} alt="Divide Logo Black" className="div-logo logo2" />

    </div>
  );
};

export default Divide;
