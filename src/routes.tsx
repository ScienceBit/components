import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import {About} from './pages/about';
import ContactUs from './pages/contactUs';
import {Blog} from './pages/blog';
import { Pricing } from "./pages/pricing";
import { Integrations } from "./pages/integrations";




function Rota(){

    return(
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contactUs" element={<ContactUs/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/integrations" element={<Integrations/>}/>
   </Routes>
   );
}

export default Rota;