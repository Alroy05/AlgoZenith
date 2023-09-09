import React from 'react'
import './Events.css'
import NewEvents from './NewEvents'
import PastEvents from './PastEvents'

export default function Events() {
  return (
    <>
      <div className='events-container' id='events'>
        <p className='events-title'>Events</p>
        <p className='events-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, est maxime eius debitis libero sed saepe quisquam a ratione asperiores!</p>
        <NewEvents display='true' margin='20px'/>
        <p className='events-title' style={{'fontSize':'1.8rem'}}>Past Events</p>
        <PastEvents />
      </div>
    </>
  )
}
