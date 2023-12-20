import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { Logo } from "../Logo/Logo";

const category = [
  {
    id: "hskdhcjshsohja",
    name: "Plantas",
    path: "plantas",
    description: "Esto es una category",
  },
  {
    id: "hskdhcjshsoha",
    name: "Macetas",
    path: "macetas",
    description: "Esto es una category",
  },
];

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
            <NavLink end className="btn" to="/">
              Home
            </NavLink>
            {category.map((category) => (
              <NavLink
                key={category.id}
                className="btn"
                to={`/category/${category.path}`}
              >
                {category.name}
              </NavLink>
            ))}
          </Nav>
          <Nav>
            <Nav.Link href="#pricing"></Nav.Link>
            <Link className="btn" to="/CartContainer">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
