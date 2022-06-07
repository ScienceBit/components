import { useState } from "react";
import { IconBase } from "react-icons";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/github.svg'
import Rota from "../../routes";
import {
    Navbar, Nav, Container,
    NavDropdown, Form,
    FormControl, Button, Dropdown
} from 'react-bootstrap';
import './styles.css';

function NavBarCinco() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <Navbar expand="lg" className="nav">
                <Container fluid>
                    <Navbar.Brand href="#">
                        Logo
                        <i className="fas fa-code"></i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">Portfolio</Nav.Link>
                            <NavDropdown title="Resourses" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Pricing
                            </Nav.Link>
                        </Nav>
                        <Dropdown >
                            <Dropdown.Toggle id="dropdown-basic" variant="light" className="btnLanguage">
                            <i className="fas fa-code"/>
                                Language
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="outline-light" className="btnSigIn">Get started</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );

}

export default NavBarCinco;