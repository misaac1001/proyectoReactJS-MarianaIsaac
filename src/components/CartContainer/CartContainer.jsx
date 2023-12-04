import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartContainer = () => {
  const { cartList } = useContext(CartContext);
  return (
    <div>
      {cartList.map((product) => (
        <div key={+product.id}>
          <img className="w-20" src={product.img} alt="" />
          <h2>{product.nombre}</h2>
          <p>{product.precio}</p>
        </div>
      ))}
    </div>
  );
};
