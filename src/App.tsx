import React from 'react';
import './assets/styles/global.css'
import Rota from './routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBarTres from './components/navBarTres';
import NavBarQuatro from './components/navBarQuatro';
import NavBarCinco from './components/navBarCinco';
import NavBarSeis from './components/navBarSeis';
import NavBarSete from './components/navBarSete';
import NavBarOito from './components/navBarOito';
import NavBarNove from './components/navBarNove';
import NavBarDez from './components/navBarDez';
import NavBarOnze from './components/navBarOnze';
import NavBarTreze from './components/navBarTreze';
import NavBarQuatorze from './components/navBarQuatorze';
import NavBarQuinze from './components/navBarQuinze';
import NavBarDezesseis from './components/navBarDezesseis';
import NavBarDezessete from './components/navBarDezessete';
import NavBarDezoito from './components/navBarDezoito';
import NavBarDezenove from './components/navBarDezenove';
import NavBarVinte from './components/navBarVinte';
import NavBarVinteUm from './components/navBarVinteUm';



function App() {
  return (
  <Router>
    <NavBarDezessete/>
  </Router>
  );
}

export default App;
