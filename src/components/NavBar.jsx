import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";


export const NavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <NavLink to = "/">Home</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="category/Titanio">Titanio</NavLink>
            <NavLink to="category/Peek">Peek</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>

    );
};