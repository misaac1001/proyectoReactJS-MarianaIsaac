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
  const emptyCart = () => {
    setCartList([]);
  };

  const getTotalQuantity = () => {
    const totalQuantity = cartList.reduce(
      (total, product) => total + product.cantidad,
      0
    );
    return totalQuantity;
  };

  const getTotalPrice = () => {
    const totalPrice = cartList.reduce(
      (total, product) => total + product.precio * product.cantidad,
      0
    );
    return totalPrice;
  };

  const removeProductId = (id) => {
    const removeProduct = cartList.filter((product) => product.id !== id);
    setCartList(removeProduct);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        emptyCart,
        getTotalQuantity,
        getTotalPrice,
        removeProductId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
