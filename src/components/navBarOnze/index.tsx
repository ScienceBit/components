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
import {BiSearchAlt, BiUser} from 'react-icons/bi';

function NavBarOnze() {
    return (
        <>
        {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
          <Navbar bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className='Toggle'
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2" disabled>Link</Nav.Link>
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
              <Navbar.Brand href="#">
              Logo
                        <i className="fas fa-code"></i>
              </Navbar.Brand>

            </Container>
          </Navbar>
        ))}
      </>
    );

}

export default NavBarOnze;