import React from 'react'
import './PastEvents.css'
import EventCard from './EventCard'
import poster from '../assets/mememania.png'
import Fade from 'react-reveal/Fade';


let eventNames = [
{
  "name": "MEMEMANIA",
  "description": "Where coding and programming enthusiasts unleash their humor and creativity."
}
]

export default function PastEvents() {
  return (
    <div className='past-event-container'>
      <Fade bottom>
      <>
        {eventNames.map((event) => {
                              return <EventCard image={poster} name={event.name} Description={event.description}/>
                          }
                        )
        }
      </>
      </Fade>
    </div>
  )
}
