import React from 'react'
import carImg1 from '../images/car-img-02.png'

export default function Main() {
  return (
<div className='main'>
      <h1>HOW IT WORK</h1>
      <div className="steps-container">
        <div className="step">
          <span className="icon">🔍</span>
          <h2>Search Our Inventory</h2>
          <p className='maintx'>You can search your desired vehicle in our database using the search functionality.</p>
        </div>
        <div className="step">
          <span className="icon">🚗</span>
          <h2>Choose The Car You Like</h2>
          <p className='maintx'>Choose the Car with your preferences like color, make-year, and kilometer-driven.</p>
        </div>
        <div className="step">
          <span className="icon">💸</span>
          <h2>Better Investment</h2>
          <p className='maintx'>A used car is sometimes a better investment than a new car. It saves you from extra liabilities.</p>
        </div>
        <div className="step">
          <span className="icon">⛐</span>
          <h2>Get A Test Drive</h2>
          <p className='maintx'>Do not forget to test drive a vehicle before finalizing the deal. It helps you to provide real feedback from the vehicle.</p>
        </div>
      </div>

      <h1 className="section-title">WHY US</h1>
<div className="why-us-container">
  <img src={carImg1} alt="Car Image1" className="car-image1" />
  <div className="info-container">
    <ul className="benefits-list">
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
    </ul>
    <button className="learn-more-button">Learn More</button>
  </div>
</div>




    </div>
  );
}
