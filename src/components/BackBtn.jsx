import React from 'react'
import blueLogo from '../assets/blueLogo.svg';
import "./BackBtn.css";
// import { Link as ScrollLink } from 'react-scroll';
import  { Link }   from 'react-router-dom';

export default function BackBtn() {
  return (
    <div className='top'>
      <Link to="/" ><img src={blueLogo} alt="logo" className="logo"></img></Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <ul className="menu">
            <li><Link to="/"><button className='back-btn'>Back to Home</button></Link></li>
        </ul>
    </div>
  )
}
