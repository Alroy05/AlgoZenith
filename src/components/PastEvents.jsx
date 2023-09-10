import React from 'react'
import './PastEvents.css'
import EventCard from './EventCard'
import poster from '../assets/mememania.png'
import Fade from 'react-reveal/Fade';


let eventNames = [
{
  "name": "MEMEMANIA",
  "description": "loremshkdbcsdjcskdbjsjdb"
},
{
  "name": "blah",
  "description": "loremshkdbcsdjcskdbjsjdb"
},
{
  "name": "i dont konw what",
  "description": "loremshkdbcsdjcskdbjsjdb"
},
{
  "name": "do what u liek",
  "description": "loremshkdbcsdjcskdbjsjdb"
}]

export default function PastEvents() {
  return (
    <div className='past-event-container'>
      <Fade bottom>
      {eventNames.map((event) => {
                            return <EventCard image={poster} name={event.name} Description={event.description}/>
                        }
                      )
      }
      </Fade>
    </div>
  )
}
