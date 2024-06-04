import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
  <header>
  <Navbar expand="lg" className="bg-body-black navbar-dark" >
      <Navbar.Brand to="/" as={NavLink} className="navBrand">
        <h1>Ivana Monte Tattoo</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbarCollapse">
        <Nav>
          <Nav.Link to="/category/diseños" as={NavLink} className="navLink">
            Diseños
          </Nav.Link>
          <Nav.Link to="/tattoos" as={NavLink} className="navLink">
            Tattoos
          </Nav.Link>
          <NavDropdown
            title="Productos"
            id="basic-nav-dropdown"
            className="navDrop"
          >
            <NavDropdown.Item to="/category/cuidadoPostTattoo" as={NavLink}>
              Cuidados Post Tattoo
            </NavDropdown.Item>
            <NavDropdown.Item to="/category/accesorios" as={NavLink}>
              Accesorios
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
  </Navbar>
  </header>
);

export default NavBar;
