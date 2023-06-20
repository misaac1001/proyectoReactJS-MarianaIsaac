import { Stack } from "@mui/material";
import "../navbar/Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import Logo from "../../common/logo/Logo";


const Navbar = () => {
  return (
    <Stack direction="row" className="container">
      <Logo/>
      <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget/>
    </Stack>
  );
};

export default Navbar;
