import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import SideBarUm from './components/sideUm';
import Home from './pages/home';

function App() {
  return (
    <Router>
    <Home/>
    </Router>
  );
}

export default App;
