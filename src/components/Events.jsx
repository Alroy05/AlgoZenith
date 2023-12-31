import React from 'react'
import './Events.css'
import NewEvents from './NewEvents'
import PastEvents from './PastEvents'
import Fade from 'react-reveal/Fade';

export default function Events() {
  return (
    <>
      <div className='events-container' id='events'>
        <Fade bottom>
          <p className='events-title'>Events</p>
          <p className='events-des'>Explore our diverse range of tech-centric events, designed to inspire, educate, and connect coding enthusiasts</p>
          <NewEvents display='true' margin='20px'/>
          <p className='events-title' style={{'fontSize':'1.8rem'}}>Past Events</p>
          <PastEvents />
        </Fade>
      </div>
    </>
  )
}
