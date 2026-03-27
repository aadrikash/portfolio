import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">Aadrika®</div>
      <div className="profile-pic">
        <img src="path/to/profile_pic.jpg" alt="Profile" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="cta-button">Begin Journey</button>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navigation;
