import { Stack } from "@mui/material";
import "./Navbar.css";
import CartWidget from "../../common/CartWidget/CartWidget";
import Logo from "../../common/Logo/Logo";

export const Navbar = () => {
  return (
    <Stack direction="row" className="container">
      <Logo />
      <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </Stack>
  );
};
