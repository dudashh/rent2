import React, { useState } from 'react';
import Listing from '../images/listing-page-header-img.png';
import Tesla from '../images/blog_img4.png';

export default function Used() {
  const [sortCriteria, setSortCriteria] = useState(''); 
  const [cars, setCars] = useState([
    {
      id: 1,
      image: Tesla,
      characteristics: ["Рік: 2020", "Ціна: $25,000", "Пробіг: 10,000 км", "Колір: Білий", "Потужність: 300 к.с.", "Кузов: Седан"],
      price: 25000,
      year: 2020,
    },
    {
      id: 2,
      image: Tesla,
      characteristics: ["Рік: 2019", "Ціна: $22,000", "Пробіг: 15,000 км", "Колір: Чорний", "Потужність: 280 к.с.", "Кузов: Седан"],
      price: 22000,
      year: 2019,
    },
    {
      id: 3,
      image: Tesla,
      characteristics: ["Рік: 2018", "Ціна: $20,000", "Пробіг: 20,000 км", "Колір: Червоний", "Потужність: 250 к.с.", "Кузов: Седан"],
      price: 20000,
      year: 2018,
    },
    {
      id: 4,
      image: Tesla,
      characteristics: ["Рік: 2021", "Ціна: $30,000", "Пробіг: 5,000 км", "Колір: Сірий", "Потужність: 320 к.с.", "Кузов: Седан"],
      price: 30000,
      year: 2021,
    },
    {
      id: 5,
      image: Tesla,
      characteristics: ["Рік: 2017", "Ціна: $18,000", "Пробіг: 25,000 км", "Колір: Синій", "Потужність: 240 к.с.", "Кузов: Седан"],
      price: 18000,
      year: 2017,
    },
    {
      id: 6,
      image: Tesla,
      characteristics: ["Рік: 2016", "Ціна: $15,000", "Пробіг: 30,000 км", "Колір: Зелений", "Потужність: 220 к.с.", "Кузов: Седан"],
      price: 15000,
      year: 2016,
    },
  ]);

  
  const handleSortChange = (e) => {
    const criteria = e.target.value;
    setSortCriteria(criteria);

    const sortedCars = [...cars].sort((a, b) => {
      if (criteria === 'price') {
        return a.price - b.price; 
      } else if (criteria === 'year') {
        return b.year - a.year; 
      }
      return 0;
    });

    setCars(sortedCars);
  };

  return (
    <div>
      <img src={Listing} alt="Car Image2" className="car-image2" />

      <div className="sort-container">
        <label htmlFor="sort">Сортувати за:</label>
        <select id="sort" value={sortCriteria} onChange={handleSortChange}>
          <option value="">Виберіть...</option>
          <option value="price">Ціна</option>
          <option value="year">Рік випуску</option>
        </select>
      </div>

      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt="Car" className="car-image4" />
          <div className="car-details">
            <div className="car-characteristics">
              {car.characteristics.map((char, index) => (
                <p key={index} className="uuss">{char}</p>
              ))}
            </div>
            <div className="car-buttons">
              <button className="rent-button">Орендувати</button>
              <button className="response-button">Оцінити</button>
            </div>
          </div>
        </div>
      ))}
       <div className="dealer-contact">
        <p>dealer contact</p>
        <button className="contact-button">Зв'язатися з дилером</button>
      </div>
    </div>
    
  );
}


