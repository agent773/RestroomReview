import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarStyles.css'
import logo from './assets/Toilet.png'
import { Button, NavbarToggle } from 'react-bootstrap';

function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              src= {logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Toilet"
            />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Berkeley Restroom Review </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/Article1" className='link'>Home        </a>
            <a href="#login" className='link'>Tips        </a>
            <a href="#login" className='link'>Politics    </a>
          </Navbar.Text>
          <Nav>
        
        <NavDropdown
            id="nav-dropdown-dark-example"
            title="More Useless Shit"
            menuVariant="dark"
            className='navdrop'
        >
            <NavDropdown.Item href="#action/3.1">Quizzes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Weather</NavDropdown.Item>
            <NavDropdown.Item href="https://theonion.com/" target='_blank'>Inspiration</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;