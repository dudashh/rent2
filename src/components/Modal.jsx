/* eslint-disable react/prop-types */
import React from "react";


const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        
        <form>
        <h2>Login</h2>
          <input type="text" placeholder="Username or Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <div className="modal-footer">
        <p className="modl">Don't have an account? <a href="#">Sign Up Here</a></p>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
