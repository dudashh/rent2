
import car1 from '../images/support_faq_bg.png';
import car2 from '../images/support_faq_bg1.png';
import car3 from '../images/car-img-01.png';
import React, { useState } from 'react';


const carImages = [car1, car2, car3];


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
