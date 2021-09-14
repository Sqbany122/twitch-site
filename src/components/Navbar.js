import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar className="navbar bg-black py-3 px-4" collapseOnSelect  expand="lg">
            <Navbar.Brand as={Link} to="/" className="text-light" style={{fontSize: "1.7rem"}}><img src="logo.jpg" width="50px" className="rounded-circle navbar-logo"/><b>BigosBloodyBoy</b></Navbar.Brand>
            <Navbar.Toggle  className="bg-light" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Item>
                    <Nav.Link className="text-light" eventKey="1" as={Link} to="/">
                        Strona główna
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-light" eventKey="2" as={Link} to="/klipy">
                        Klipy
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation