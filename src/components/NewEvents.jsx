import React from 'react'
import Poster from '../assets/mememania.png'; 
import './NewEvents.css';

export default function newEvents() {
  return (
    <>
      <div className='wrap-register'>
        <div className='poster-container'>
          <img src={Poster} alt="Event-Poster" className='event-poster'/>
        </div>
        <div className='register-div'>
          <p className='event-name'>Register for MEMEMANIA</p>
          <ul>
            <li>Speaker: XYZ</li>
            <li>Timing: 10:00</li>
            <li>Venue: Samvad</li>
          </ul>
          <button className='register-btn'>Register</button>
        </div>
      </div>
    </>
  )
}
