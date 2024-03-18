import React from 'react';
import './hero.css'; // Import CSS file
import heroCover from '../../assests/imgs/home.jpg'

const Hero = () => {
  return (
    <div id="myhome" className="bg-dark custom d-flex justify-content-center align-items-center text-white py-3">
    <div className="text-center">
      
      <div className="pt-5 pb-2">
        <img src={heroCover} alt="" className="mb-3 fa-xs rounded-circle"/>
        </div>
        <div>
            <h2 className="text-uppercase mb-4 fs-1 fw-bolder">Fatma Nasser</h2>
            <div  className="d-flex align-items-center justify-content-center mb-3">
              
            <p>Software Engineer - Web Develober </p>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Hero;
