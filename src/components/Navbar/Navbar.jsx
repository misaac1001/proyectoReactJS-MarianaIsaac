import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
import { Logo } from "../Logo/Logo";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <Logo/>
          {" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Plantas</Nav.Link>
            <Nav.Link href="#pricing">Macetas</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">
              {" "}
            <Carri
             {" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};