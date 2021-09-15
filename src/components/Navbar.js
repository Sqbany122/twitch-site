import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar className="navbar bg-black py-3 px-4" collapseOnSelect  expand="lg">
            <Navbar.Brand as={Link} to="/" className="text-light" style={{fontSize: "1.7rem"}}><img src="logo.jpg" width="50px" className="rounded-circle navbar-logo"/><b>BigosBloodyBoy</b></Navbar.Brand>
            <Navbar.Toggle  className="bg-light" />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Item>
                        <Nav.Link className="text-light" eventKey="2" as={Link} to="/klipy">
                            Klipy
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-light" eventKey="3" as={Link} to="/wideo">
                            Zapisy transmisji
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>        
                        <NavDropdown className="text-light" title="Użytkownicy" id="collasible-nav-dropdown">
                            <NavDropdown.Item eventKey="4" as={Link} to="/moderatorzy">Moderatorzy</NavDropdown.Item>
                            <NavDropdown.Item eventKey="5" as={Link} to="/subskrybenci">Subskrybenci</NavDropdown.Item>
                            <NavDropdown.Item eventKey="6" as={Link} to="/follow">Follow'y</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                </Nav>
                <Nav className="mr-0">
                    <Nav.Link className="text-light">
                        <img src="donate-img.png" width="200px" className="rounded-full" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation