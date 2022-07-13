import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './styles.css';
import Rota from "../../routes";
import Button from "../Button";

function NavBarDezessete() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="wrapper">
      <nav className='navbar'>
        <div className="content">
        <div className="logo"> <Link to='/'>Logo</Link></div>
                <ul className="links">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/'>About</Link></li>
                  <li><Link to='/'>Services</Link></li>
                  <li><Link to='/'>Features</Link></li>
                  <li><Link to='/'>Feedback</Link></li>
                </ul>
        </div>
        <div className="search-icon"><i className="fas fa-search"/> </div>
        <form action="#" className="search-box">
        <input type="text" placeholder="Type Something to Search..." required/>
        <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right"></i></button>
      </form>
      </nav>
    </ div>

  );
}


export default NavBarDezessete;