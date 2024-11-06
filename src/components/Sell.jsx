
import Tree from '../images/profile-page-header-img.png';
import React, { useState } from 'react';

export default function Sell() {
    const [formData, setFormData] = useState({
      email: '',
      year: '',
      power: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    return (
      <div>
        <div>
          <img src={Tree} alt="tre" className="tre" />
        </div>
  
        <div className="form-container">
          <div className="form-wrapper">
            <h2 className="form-title">lorem ipsum</h2>
  
            <div className="text-column">
              <div className="text-items">
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
              </div>
              <div className="divider"></div>
            </div>
  
            <form>
              <div className="input-field">
                <input
                  type="text"
                  name="color"
                  placeholder="рік"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="input-field">
                <input
                  type="text"
                  name="year"
                  placeholder="колір"
                  value={formData.year}
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="input-field">
                <input
                  type="text"
                  name="power"
                  placeholder="потужність"
                  value={formData.power}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="power"
                  placeholder="ціна"
                  value={formData.power}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="power"
                  placeholder="пробіг"
                  value={formData.power}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="power"
                  placeholder="кузов"
                  value={formData.power}
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="gray-box"></div>
  
              <button type="submit" className="submit-button">send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }