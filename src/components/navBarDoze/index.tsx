import { useState } from "react";
import { IconBase } from "react-icons";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/github.svg'
import Rota from "../../routes";
import {
    Navbar, Nav, Container,
    NavDropdown, Form,
    FormControl, Button
} from 'react-bootstrap';
import './styles.css';

function NavBarTres() {
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
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );

}

export default NavBarTres;