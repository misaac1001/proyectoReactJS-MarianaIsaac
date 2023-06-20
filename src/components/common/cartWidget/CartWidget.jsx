import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <IconButton aria-label="cart">
        <Badge badgeContent="2" color="error">
          <ShoppingCartIcon sx={{ fontSize: "30px" }} />
        </Badge>
      </IconButton>
  )
}

export default CartWidget