import React from 'react'

export default function Header() {
  return (
    <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home">Головна</a></li>
                    <li className="nav-item"><a href="#about">Про нас</a></li>
                    <li className="nav-item"><a href="#services">Послуги</a></li>
                </ul>
                <button className="nav-button">Контакти</button>
            </nav>
        </header>
  )
}
