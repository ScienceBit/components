import {useState} from "react";
import { IconBase } from "react-icons";
import { NavLink } from "react-router-dom";
import './styles.css';
import Rota from "../../routes";

function NavBarUm() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink to="/home" className="nav-logo">
              Logo
              <i className="fas fa-code"></i>
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
              <NavLink 
              className={(navData) => navData.isActive ? "active" : "nav-links" }
                  to="/"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink 
              className={(navData) => navData.isActive ? "active" : "nav-links" }
                  to="/about"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink 
              className={(navData) => navData.isActive ? "active" : "nav-links" }
                  to="/blog"
                  onClick={handleClick}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
              className={(navData) => navData.isActive ? "active" : "nav-links" }
                  to="/contact"
                  onClick={handleClick}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    );

}

export default NavBarUm;