import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/Used">USED CAR</Link>
          </li>
          <li className="nav-item">
            <Link to="/Sell">SELL MY</Link>
          </li>
        </ul>
        <button className="nav-button" onClick={toggleModal}>
          LOGIN/REGISTER
        </button>
        <Modal show={isModalOpen} onClose={toggleModal} />
      </nav>
    </header>
  );
}

export default Header;

