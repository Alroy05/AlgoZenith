import React from "react";
import blueLogo from '../assets/blueLogo.svg'
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header className="header">
        <img src={blueLogo} alt="logo" className="logo"></img>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
        <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">Objectives</a></li>
            <li><a href="/">Team Members</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;