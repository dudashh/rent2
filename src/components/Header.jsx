import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Головна</Link></li>
                    <li className="nav-item"><Link to="/Used">Про нас</Link></li>
                    <li className="nav-item"><Link to="/Sell">Послуги</Link></li>
                </ul>
                <button className="nav-button">Контакти</button>
            </nav>
        </header>
  )
}
