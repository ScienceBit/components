import { useState } from "react";
import { IconBase } from "react-icons";
import { NavLink } from "react-router-dom";
import Rota from "../../routes";
import {
    Navbar, Nav, Container,
    NavDropdown, Form,
    FormControl, Button, Dropdown, Offcanvas
} from 'react-bootstrap';
import './styles.css';
import { BiSearchAlt, BiUser } from 'react-icons/bi';

function NavBarDez() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
                <Navbar bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    </Container>
                </Navbar>
            ))}
        </>
    );

}

export default NavBarDez;