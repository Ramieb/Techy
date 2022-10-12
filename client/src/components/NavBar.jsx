import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div className='navbar'>
      <Navbar>
          <Container className='navbarContainer'>
            <Nav className="navbarItems">
              <a href='/'><button>Home</button></a>
              <a href='#features'><button>Features</button></a>
              <a href='#pricing'><button>Pricing</button></a>
              <div className='registerAndLoginButtons'>
              <a href='register'><button>Register</button></a>
              <a href='login'><button>Login</button></a>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div>
  )
}

export default NavBar
