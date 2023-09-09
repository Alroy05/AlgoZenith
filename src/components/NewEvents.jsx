import { React } from 'react'
import Poster from '../assets/mememania.png'; 
import './NewEvents.css';
import { Link } from 'react-router-dom';

export default function newEvents(props) { 
  return (
    <>
      <div className='wrap-register' style={{'marginTop':props.margin}}>
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
          <Link to='/register'>
            <button className='register-btn' style={{'display':props.display}}>Register</button>
          </Link>
        </div>
      </div>
    </>
  )
}
