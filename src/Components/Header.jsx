import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar style={{backgroundColor:'red'}} expand="lg" bg="info" variant="dark" sticky="top">
      <Container>
        <Link className='text-decoration-none' to="/">
          <Navbar.Brand className="text-white">Book-keeper</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link text-white" to="/">Home</Link>
            <Link className="nav-link text-white" to="/books">Booklist</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
