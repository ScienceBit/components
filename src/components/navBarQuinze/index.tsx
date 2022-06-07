import { useState } from "react";
import { IconBase } from "react-icons";
import { Link } from "react-router-dom";
import './styles.css';
import Rota from "../../routes";
import { NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function NavBarQuinze() {
  const [click, setClick] = useState(true );
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>

        <ul className= 'nav-menu' >
          <li className='nav-item'id={click ?'hidden':''}>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'id={click ?'hidden':''} >
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
          <li
            className='nav-item'id={click ?'hidden':''} >  
             <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li
            className='nav-item'id={click ?'hidden':''} > 
           <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        </ul>
        <div className="search-menu">
          <input type='text' placeholder="Pesquisar..."/>
          <button>BUSCAR</button>
        </div>
      </nav>
    </>

  );
}


export default NavBarQuinze;