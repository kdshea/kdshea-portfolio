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
            <Nav.Link href="#">Skills</Nav.Link>
            <Nav.Link eventKey={2} href="#">Experience</Nav.Link>
            <Nav.Link eventKey={2} href="#">Projects</Nav.Link>
            <Nav.Link eventKey={2} href="#">About</Nav.Link>
            <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">
                Get In Touch
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Email</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Twitter</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>
  )
}

export default NavBar