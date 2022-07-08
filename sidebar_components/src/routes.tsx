import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";


function Rota(){

    return(
    <Routes>
    <Route path="/" element={<Home/>}/>
  
   </Routes>
   );
}

export default Rota;