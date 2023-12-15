import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
import { Logo } from "../Logo/Logo";
import { CarritoIcono } from "../CarritoIcono/CarritoIcono";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={({ isActive }) => (isActive ? "btn btn-dark" : "btn")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "btn btn-dark" : "btn")}
              to="/categoria/plantas"
            >
              Plantas
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "btn btn-dark" : "btn")}
              to="/categoria/macetas"
            >
              Macetas
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "btn btn-dark" : "btn")}
              to="/categoria/contacto"
            >
              Contacto
            </NavLink>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing"></Nav.Link>
            <Link className="btn" to="/CartContainer">
              <CarritoIcono />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
