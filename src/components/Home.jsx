import React from 'react'
import './Home.css'
import graphic from '../assets/code.png'

export default function Home() {
  return (
    <>
      <div className='wrap-container'>
        <div className='content-container'>
        <span className='highlight'>
          <p><span className='highlighted'>AlgoZenith</span>,</p>
          <p>An <strong>Algorithm</strong> to become</p>
          <p><span className='highlighted'>Awesome</span> at <span className='highlighted'>DSA</span> and <span className='highlighted'>CP</span></p>
          <button className='register'>Register</button>
        </span>
        </div>
        <div className='image-container'>
          <img src={graphic} alt="coding graphic" className='coding-image'/>
        </div>
      </div>
    </>
  )
}
