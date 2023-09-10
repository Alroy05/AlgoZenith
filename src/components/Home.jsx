import React from 'react'
import './Home.css'
import graphic from '../assets/code.png'
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <>
      <div className='wrap-container' id='home'>
        <Fade bottom>
        <div className='content-container'>
        <span className='highlight'>
          <p><span className='highlighted'>AlgoZenith</span>,</p>
          <p>An <strong>Algorithm</strong> to become</p>
          <p><span className='highlighted'>Awesome</span> at <span className='highlighted'>DSA</span> and <span className='highlighted'>CP</span></p>
          <Link to="objectives" spy={true} smooth={true} offset={-100} duration={500}>
            <button className='register'>Know More</button>
          </Link>
          
          <Link to="events" spy={true} smooth={true} offset={-100} duration={500}>
            <button className='register'>Register</button>
          </Link>
          
        </span>
        </div>
        <div className='image-container'>
          <img src={graphic} alt="coding graphic" className='coding-image'/>
        </div>
        </Fade>
      </div>
    </>
  )
}
