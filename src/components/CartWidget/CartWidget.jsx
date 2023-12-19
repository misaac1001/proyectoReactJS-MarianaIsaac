import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { UseCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantTotalProduct } = UseCartContext();

  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={cantTotalProduct()} color="error">
        {cantTotalProduct() !== 0 && (
          <>
            <ShoppingCartIcon sx={{ fontSize: "30px" }} />
          </>
        )}
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
