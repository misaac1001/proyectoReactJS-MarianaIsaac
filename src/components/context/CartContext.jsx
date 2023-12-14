import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const UseCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addProduct = (product) => {
    const existingProduct = cartList.find((p) => p.id === product.id);

    if (existingProduct) {
      const updatedCart = cartList.map((p) =>
        p.id === product.id
          ? { ...p, cantidad: p.cantidad + product.cantidad }
          : p
      );

      setCartList(updatedCart);
    } else {
      setCartList([...cartList, product]);
    }
  };
  const vaciarCarrito = () => {
    setCartList([]);
  };

  const cantTotalProduct = () => {
    const cantTotal = cartList.reduce(
      (total, product) => total + product.cantidad,
      0
    );
    return cantTotal;
  };

  const precioTotalProduct = () => {
    const totalPrecio = cartList.reduce(
      (total, product) => total + product.precio * product.cantidad,
      0
    );
    return totalPrecio;
  };

  const eliminarProductId = (id) => {
    const productoEliminado = cartList.filter((product) => product.id !== id);
    setCartList(productoEliminado);
  };

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
