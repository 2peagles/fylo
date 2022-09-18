import React from 'react'
import "../styles/testimonials.scss"
import profileone from '../assets/images/profileone.jpg'
import profiletwo from '../assets/images/profiletwo.jpg'
import profilethree from '../assets/images/profilethree.jpg'
export const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className='col quotebg'>
        <p>Flyo has improved our team productivity by an order of magnitude. 
        Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className='profile'>
          <img src={profileone} alt="profile one" /> 
          <h3>Satish Patel </h3>
          <p> Founder & CEO, Huddle </p>
          </div>
        </div>
      <div className='col'>
        <p>Flyo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className='profile'>
          <img src={profiletwo} alt="profile one" />
          <h3>Bruce Mckenzie </h3>
          <p> Founder & CEO, Huddle </p>
        </div>
      </div>
      <div className='col'>
        <p>Flyo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className='profile'>
          <img src={profilethree} alt="profile one" />
          <h3>Iva Boyd</h3>
          <p> Founder & CEO, Huddle </p>
        </div>
      </div>
    </div>
  )
}
