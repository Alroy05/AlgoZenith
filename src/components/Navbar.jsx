import React from "react";
import blueLogo from '../assets/blueLogo.svg';
import "./Navbar.css";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className="header">
      <ScrollLink to="home" spy={true} smooth={true} offset={-100} duration={500}><img src={blueLogo} alt="logo" className="logo"></img></ScrollLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
        <ul className="menu">
            <li><ScrollLink to="home" spy={true} smooth={true} offset={-100} duration={500} >Home</ScrollLink></li>
            <li><ScrollLink Link to="objectives" spy={true} smooth={true} offset={-100} duration={500}>Objectives</ScrollLink></li>
            <li><ScrollLink to="team" spy={true} smooth={true} offset={50} duration={500}>Team Members</ScrollLink></li>
            <li><ScrollLink to="events" spy={true} smooth={true} offset={-100} duration={500}>Events</ScrollLink></li>
            <li><ScrollLink to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</ScrollLink></li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;