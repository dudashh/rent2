import React from "react";
import Header from "./components/Header.jsx";
import Navig from "./components/Navig.jsx";
import Main from "./components/Main.jsx";
import Carusel from "./components/Carusel.jsx";

const App = () =>{
    return (
        <div className="wraper">
<Header />
<Navig />
<Main />
<Carusel />
        </div>
    )
}

export default App