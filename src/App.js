import React from "react";
import Header from "./components/Header.jsx";
import Navig from "./components/Navig.jsx";
import Main from "./components/Main.jsx";
import Carusel from "./components/Carusel.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from 'react-router-dom'; 
import Used from "./components/Used.jsx";
import Sell from "./components/Sell.jsx";


const App = () => {
  return (
    <div className="wraper">
      
      <Header />


      
      <Routes>
        
        <Route path="/" element={<><Navig /><Main /><Carusel /><Footer /></>} /> {/* Маршрут для головної сторінки */}
        
        
        <Route path="/Used" element={<Used />} />
        <Route path="/Sell" element={<><Sell /><Footer /></>} />
      </Routes>

      
      
    </div>
  );
}

export default App;
