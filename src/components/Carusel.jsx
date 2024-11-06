
import car1 from '../images/support_faq_bg.png';
import car2 from '../images/f12_red_spb_pc_001_720x480_80c.jpg';
import car3 from '../images/blog_img4.png';
import car4 from '../images/rastamogka-avto-iz-chehii.jpg';
import car5 from '../images/270d0-2021-jaguar-f-type.jpg';
import car6 from '../images/leasing_02-kopiya.jpg';
import React, { useState } from 'react';


const carImages = [car1, car2, car3, car4, car5, car6];


export default function Carusel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % carImages.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((currentIndex - 1 + carImages.length) % carImages.length);
    };
  
    const getLeftIndex = () => (currentIndex - 1 + carImages.length) % carImages.length;
    const getRightIndex = () => (currentIndex + 1) % carImages.length;
  
    return (
        
      <div className="carousel">
        <h1> OUR CARS</h1>
        <button className="carousel-button left" onClick={prevSlide}>◀</button>
        <div className="carousel-images">
          <img src={carImages[getLeftIndex()]} alt="Left Car" className="carousel-image small" />
          <img src={carImages[currentIndex]} alt="Current Car" className="carousel-image large" />
          <img src={carImages[getRightIndex()]} alt="Right Car" className="carousel-image small" />
        </div>
        <button className="carousel-button right" onClick={nextSlide}>▶</button>
      </div>
    );
  }
