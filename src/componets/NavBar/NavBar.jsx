import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CarWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="http://localhost:3000/">Primero...el café</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="/category/cafeteras" as={NavLink}>
            Cafeteras
          </Nav.Link>
          <Nav.Link to="/category/accesorios" as={NavLink}>
            Accesorios
          </Nav.Link>
          <Nav.Link to="/category/cafégranos" as={NavLink}>
            Café en Granos
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <CartWidget />
  </Navbar>
);

export default NavBar;
