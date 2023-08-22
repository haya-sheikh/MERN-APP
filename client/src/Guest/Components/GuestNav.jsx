import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function GuestNav() {
    return (
        <Navbar expand="lg" className="bg-theme">
            <Container>

            <Link className='navbar-brand' to='/'> <img src="https://o.remove.bg/downloads/ba3bb2cd-88e2-4c86-8ddf-9eaa5ffe5052/K-Ramen-only-logo-removebg-preview.png" width='200px' alt="" /> </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ms-auto">
  <Nav.Item className="m-1">
    <Link to='/login' className='btn '>
      Login
    </Link>
  </Nav.Item>
</Nav>
<Nav >
  <Nav.Item className="m1-auto">
    <Link to='/signup' className='btn'>
      SignUp
    </Link>
  </Nav.Item>
</Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}