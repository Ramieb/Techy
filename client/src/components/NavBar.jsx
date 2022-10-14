import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div className='navbar'>
      <Navbar>
          <div className='navbarContainer'>
            <Nav className="navbarItems">
              <a href='/'><div className='home-button'>Home</div></a>
              <a href='#features'><div className='features-button'>Features</div></a>
              <a href='#pricing'><div className='pricing-button'>Pricing</div></a>
              <div className='registerAndLoginButtons'>
              <a href='register'><div className='register-button'>Register</div></a>
              <a href='login'><div className='login-button'>Login</div></a>
              </div>
            </Nav>
          </div>
        </Navbar>
      </div>
  )
}

export default NavBar
