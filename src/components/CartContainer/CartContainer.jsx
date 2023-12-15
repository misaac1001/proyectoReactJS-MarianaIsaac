import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { UseCartContext } from "../context/CartContext";

export const CartContainer = () => {
  const { cartList, vaciarCarrito, eliminarProductId, cantTotalProduct, precioTotalProduct } = UseCartContext();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      const dbFirestore = getFirestore();

      // Mapear IDs de productos en el carrito a referencias de documentos Firestore
      const productRefs = cartList.map((product) => doc(dbFirestore, "products", product.id));

      // Obtener detalles de productos desde Firestore
      const productDetails = await Promise.all(productRefs.map((ref) => getDoc(ref)));

      // Crear una lista de productos con detalles y cantidades del carrito
      const updatedCartProducts = productDetails.map((productDetail, index) => {
        const cartProduct = cartList[index];
        return {
          id: cartProduct.id,
          cantidad: cartProduct.cantidad,
          ...productDetail.data(),
        };
      });

      setCartProducts(updatedCartProducts);
    };

    fetchCartProducts();
  }, [cartList]);

  const handleActualizarCarrito = async () => {
    // Actualizar cantidades en el carrito
    const updatedCartList = await Promise.all(
      cartProducts.map(async (cartProduct) => {
        const productRef = doc(getFirestore(), "products", cartProduct.id);
        await updateDoc(productRef, { stock: cartProduct.stock - cartProduct.cantidad });
        return {
          id: cartProduct.id,
          cantidad: cartProduct.cantidad,
          precio: cartProduct.precio,
          nombre: cartProduct.nombre,
          img: cartProduct.img,
        };
      })
    );

    // Actualizar el estado del carrito en el contexto
    vaciarCarrito();
    updatedCartList.forEach((product) => eliminarProductId(product.id));
  };

  return (
    <div className="container">
      <h1>Carrito de Compras</h1>
      {cartProducts.length === 0 ? (
        <div>
          <h3>No hay productos en el carrito</h3>
          <Link to="/">
            <button className="btn btn-outline-primary">Volver al inicio</button>
          </Link>
        </div>
      ) : (
        <>
          {cartProducts.map((product) => (
            <div key={product.id}>
              <img className="w-20" src={product.img} alt="" />
              <h2>Nombre: {product.nombre}</h2>
              <p>Cantidad: {product.cantidad}</p>
              <p>Precio por unidad es: $ {product.precio}</p>
              <p>Subtotal: {product.cantidad * product.precio} </p>
              <button
                className="btn btn-danger"
                onClick={() => eliminarProductId(product.id)}
              >
                X
              </button>
            </div>
          ))}
          <p>Cantidad Total: {cantTotalProduct()}</p>
          <p>Precio Total: ${precioTotalProduct()}</p>
          <button className="btn btn-success" onClick={handleActualizarCarrito}>
            Actualizar Carrito
          </button>
          <button className="btn btn-danger" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};