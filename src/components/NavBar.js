import React from 'react';
import { Navbar , Container, Nav,NavDropdown } from 'react-bootstrap';
import logo from '../img/logo.png';
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export default function NavBar() {
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <Navbar collapse OnSelect expand="lg"  variant="light">
  <Container className='navBar'>
  <Navbar.Brand href="/home"><img className='size-m' src={logo} alt='logo' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><Link to="/practice">Practice</Link></Nav.Link>
      <Nav.Link><Link to = "/test">Test</Link></Nav.Link>
      <Nav.Link><Link to = "/feedback">Feedback</Link></Nav.Link>
      
    </Nav>
    <Nav>
        
    <img src={user.photoURL} className="profile-pic" alt="profile"/>
      <NavDropdown title={user.displayName} id="collasible-nav-dropdown">

        <NavDropdown.Item onClick={ handleLogout }>Log Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
