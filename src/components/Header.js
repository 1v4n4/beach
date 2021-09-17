import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavDropdown, Container,
} from 'react-bootstrap';

const counties = ['Humboldt', 'Mendocino',
  'Sonoma', 'Marin', 'San Francisco', 'San Mateo', 'Santa Cruz', 'Monterey', 'San Luis Obispo', 'Santa Barbara', 'Ventura', 'Los Angeles', 'Orange', 'San Diego'];
const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"><Link to="/">Cal Beach</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Log In</Nav.Link>
          <Nav.Link href="#link">Log Out</Nav.Link>
          <NavDropdown title="Choose county" id="basic-nav-dropdown">
            {counties.map((county) => (
              <NavDropdown.Item href="#action/3.1" key={county} onClick>{county}</NavDropdown.Item>))}

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
