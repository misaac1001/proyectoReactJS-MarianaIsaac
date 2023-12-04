import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addProduct = (product) => {
    setCartList([...cartList, product]);
  };
  const vaciarCarrito = () => {
    setCartList([]);
  };

  const cantTotalProduct = () => {
    return cartList.reduce((total, product) => total + product.cantidad, 0);
  };

  const precioTotalProduct = () => {
    return cartList.reduce(
      (total, product) => total + product.precio * product.cantidad,
      0
    );
  };

  const eliminarProductId = (id) => {
    const productoEliminado = cartList.filter((product) => product.id !== id);
    setCartList(productoEliminado);
  };

  //Hacer:
  //Cartidad total de productos
  //precio total de productos
  //eliminar productos por id
  console.log(cartList);
  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        vaciarCarrito,
        cantTotalProduct,
        precioTotalProduct,
        eliminarProductId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
