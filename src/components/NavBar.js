import Logo from '../assets/logo.jpg'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  return (
    // <div className="nav-wrapper">
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="#">
          <img alt="K" src={Logo} width="30" height="30"className="d-inline-block align-top"/>{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#contact">
                Get In Touch
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="mailto: daishea@gmail.com?subject=Hello" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-square-envelope"></i> Email</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/katedshea/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i>  LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/kdshea" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-github"></i> GitHub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>
  )
}

export default NavBar