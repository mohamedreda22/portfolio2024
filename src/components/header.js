import logo from '../assets/Logo1.png';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/header.css';

export default function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="nav">
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="achievments" smooth={true} duration={500}>
          Achievements
        </Link>        
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>

      </div>
    </div>
  );
}
