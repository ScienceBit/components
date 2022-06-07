import { useState } from "react";
import { IconBase } from "react-icons";
import { Link } from "react-router-dom";
import { NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './styles.css';


function Dropdown() {
    const [click, setClick] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <NavDropdown
            title="Services"
            className='nav-links'
        >
            <NavDropdown.Item href="#action3"
                onClick={closeMobileMenu} 
                className='actions'
                >Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4"
                onClick={closeMobileMenu}
                className='actions'
                >
                Another 2
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item 
            href="#action5"
            onClick={closeMobileMenu} 
            className='actions'

            >
                Action 3
            </NavDropdown.Item>
        </NavDropdown>

    )
}

export default Dropdown;