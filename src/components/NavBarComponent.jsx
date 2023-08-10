import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarComponent =()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Calzados AG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">¿Donde estamos?</Nav.Link>
            <NavDropdown title="Mira aqui" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Todos los calzados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hombre
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mujer</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;