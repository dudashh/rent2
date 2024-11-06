import React from 'react'
import carImage from '../images/car-img-01.png';
import introBg from '../images/intro-bg-3.png';

export default function navig() {
  return (
    <div className="bmw">
      <img src={introBg} alt="back" className="back"/>
      <img src={carImage} alt="Car Image" className="car-image"/>
<p>FIND YOUR CAR DREAM</p>
<button className="nav-button1">SEARCH</button>
    </div>
  )
}
