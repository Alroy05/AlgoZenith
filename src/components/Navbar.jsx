import React from "react";
import blueLogo from '../assets/blueLogo.svg'
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header class="header">
        <img src={blueLogo} class="logo"></img>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
        <ul class="menu">
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