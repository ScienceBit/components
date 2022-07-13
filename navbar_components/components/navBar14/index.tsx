import { useState } from "react";
import { BsGoogle, BsFacebook, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import './styles.css';
import Rota from "../../routes";
import Button from "../Button";
import {NavDropdown} from 'react-bootstrap';
import Dropdown from "../Dropdown";


function NavBarDezessete() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className='navbar'>
     
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className='nav-item'
        >
          <NavDropdown
            title="Services"
            className='nav-links'
>
            <NavDropdown.Item href="#action3"
            onClick={closeMobileMenu}>Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4"
             onClick={closeMobileMenu}>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </li>
        <li className='nav-item'>
          <Link
            to='/products'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Products
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contact-us'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to='/sign-up'
            className='nav-links-mobile'
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </li>
      </ul> 
      
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        Logo
      </Link>
      <div className="btnIcon">
        <BsGoogle/>
      </div>
      <div className="btnIcon">
        <BsFacebook/>
      </div>
      <div className="btnIcon">
        <BsTwitter/>
      </div>
      <Button/>
      
    </nav>
  </>

  );
}


export default NavBarDezessete;