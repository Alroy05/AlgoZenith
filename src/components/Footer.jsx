import React from 'react'
import './Footer.css'
import whiteLogo from '../assets/whiteLogo.svg'
import { FaInstagram,FaLinkedinIn,FaGithub,FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className='main-content'>
        <div className='identity-container'>
        <a href='/'><img src={whiteLogo} alt='logo' className='white-logo'/></a>
        </div>
        <div className='links-container'>
          <p><strong>Usefull Links</strong></p>
          <p ><a href='/' className='link'>Home</a></p>
          <p ><a href='/' className='link'>Events</a></p>
          <p ><a href='/' className='link'>Team Members</a></p>
        </div>
        <div className='contact-container'>
          <p ><strong>Contact Us</strong></p>
          <div className='socials-container'>
              <a href='https://www.instagram.com/algozenith_crce/'><FaInstagram className='social-icons'/></a> 
              <a href='https://www.linkedin.com/in/algozenith-crce/'><FaLinkedinIn className='social-icons'/></a>
              <a href='/'><FaGithub className='social-icons'/></a>
              <a href='mailto:algozenithcrce@gmail.com'><FaEnvelope className='social-icons'/></a>
          </div>
          <p>Phone: +91 72497 35828</p>
        </div>
      </div>
      <div className='credits-part'>
        <p>&#169; Copyright <strong>Algozenith CRCE.</strong> All Rights Reserved</p>
        <p>Designed and Developed by</p>
        <p className='dev-names'><a href='https://www.linkedin.com/in/alroy-pereira-2b3631248' className='link'>Alroy Pereira</a>,<a href='https://www.linkedin.com/in/aaron-pereira-878608246/' className='link'> Aaron Pereira</a>,<a href='/' className='link'>Rudalph Gonsalves</a></p>
      </div>
    </footer>
  )
}
