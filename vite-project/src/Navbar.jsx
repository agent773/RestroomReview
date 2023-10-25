import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarStyles.css'
import logo from './assets/Toilet.png'
import nameCard from './assets/nameCard.png'
import { Button, NavbarToggle } from 'react-bootstrap';

function NavbarDarkExample() {
  return (
    <Navbar variant="dark" expand="lg" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src= {logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Toilet"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <img
              src= {nameCard}
              width="250"
              height="auto"
              className="d-inline-block align-top"
              alt="Toilet"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/" className='link'>Home        </a>
            <a href="/article1" className='link'>2023 Rankings        </a>
            <a href="/article2" className='link'>Health        </a>
            <a href="https://www.theguardian.com/us" className='link' target='_blank'>Politics    </a>
          </Navbar.Text>
          <Nav>
        
        <NavDropdown
            id="nav-dropdown-dark-example"
            title="More Useless Shit"
            menuVariant="dark"
            className='navdrop'
        >
            <NavDropdown.Item href="https://www.buzzfeed.com/parth773/what-berkeley-bathroom-are-you-9hdv8lzo2w?utm_source=dynamic&utm_campaign=bfsharecopy" target='_blank'>Quiz</NavDropdown.Item>
            <NavDropdown.Item href="https://www.wunderground.com/weather/us/ca/berkeley/KCABERKE283" target='_blank'>Weather</NavDropdown.Item>
            <NavDropdown.Item href="https://theonion.com/" target='_blank'>Inspiration</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;