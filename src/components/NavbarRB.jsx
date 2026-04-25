import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRI from './CartWidgetRI';

function NavbarRB() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src="../registro.svg" style={{width:"10rem"}} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Tareas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Controles Médicos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Vencimientos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Actividades</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetRI/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarRB;