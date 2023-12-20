import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { UseCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = UseCartContext();

  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={getTotalQuantity()} color="error">
        {getTotalQuantity() !== 0 && (
          <>
            <ShoppingCartIcon sx={{ fontSize: "30px" }} />
          </>
        )}
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
