import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { UseCartContext } from "../context/CartContext";
import { OrderForm } from "./Form";

import { CartProductsList } from "./CartProductsList";

export const CartContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });
  const {
    cartList,
    emptyCart,
    removeProductId,
    getTotalQuantity,
    getTotalPrice,
  } = UseCartContext();

  const [cartProducts, setCartProducts] = useState([]);
  const [orderID, setOrderID] = useState(null);
  const [orderError, setOrderError] = useState(null);

  const handleOrder = async (evt) => {
    evt.preventDefault();
    // Validaciones
    if (!formData.name.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "El nombre es requerido.",
      }));
      return;
    }

    if (!/^\d+$/.test(formData.phone.trim())) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "El teléfono debe contener solo números.",
      }));
      return;
    }

    if (!formData.phone.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "El teléfono es requerido.",
      }));
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "El formato del correo electrónico es inválido.",
      }));
      return;
    }

    if (formData.email.trim() !== formData.confirmEmail.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmEmail: "Los correos electrónicos no coinciden.",
      }));
      return;
    }

    // Errores
    setFormErrors({
      name: "",
      phone: "",
      email: "",
      confirmEmail: "",
    });

    const order = {};
    order.buyer = formData;
    order.items = cartList.map(({ id, nombre, precio }) => ({
      id,
      nombre,
      precio,
    }));
    order.total = getTotalPrice();

    const db = getFirestore();
    const orderColection = collection(db, "orders");

    try {
      const docRef = await addDoc(orderColection, order);
      const newOrderID = docRef.id;
      const docSnapshot = await getDoc(docRef);
      console.log("Documento creado:", docSnapshot.data());
      setOrderID(newOrderID);
    } catch (err) {
      console.error("Error al crear la orden:", err);
      setOrderError(
        "Hubo un error al procesar su orden. Por favor, inténtelo de nuevo."
      );
    }
  };

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });

    if (evt.target.name === "email" || evt.target.name === "confirmEmail") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
        confirmEmail: "",
      }));
    }
  };

  useEffect(() => {
    const fetchCartProducts = async () => {
      const dbFirestore = getFirestore();
      const productRefs = cartList.map((product) =>
        doc(dbFirestore, "products", product.id)
      );

      const productDetails = await Promise.all(
        productRefs.map((ref) => getDoc(ref))
      );

      const updatedCartProducts = productDetails.map((productDetail, index) => {
        const cartProduct = cartList[index];
        const productData = productDetail.data();

        return {
          id: cartProduct.id,
          cantidad: cartProduct.cantidad,
          ...productData,
          subtotal: cartProduct.cantidad * productData.precio,
        };
      });

      setCartProducts(updatedCartProducts);
    };

    fetchCartProducts();
  }, [cartList]);

  const handleCheckout = () => {
    emptyCart();
  };

  return (
    <div className="container mt-5">
      <h1>Carrito de Compras</h1>
      {orderID ? (
        <div className="alert alert-success" role="alert">
          <h3>Su orden ha sido realizada con éxito.</h3>
          <p>Su número de orden es: {orderID}</p>
          <Link to="/">
            <button className="btn btn-danger" onClick={handleCheckout}>
              Volver al inicio
            </button>
          </Link>
        </div>
      ) : orderError ? (
        <div className="alert alert-danger" role="alert">
          <h3>{orderError}</h3>
        </div>
      ) : cartProducts.length === 0 ? (
        <div>
          <h3>No hay productos en el carrito</h3>
          <Link to="/">
            <button className="btn btn-outline-primary">
              Volver al inicio
            </button>
          </Link>
        </div>
      ) : (
        <>
          <CartProductsList
            cartProducts={cartProducts}
            removeProductId={removeProductId}
          />
          <p className="fw-bold">Cantidad Total: {getTotalQuantity()}</p>
          <p className="fw-bold">Precio Total: ${getTotalPrice()}</p>
          <button className="btn btn-danger" onClick={handleCheckout}>
            Vaciar Carrito
          </button>
          <OrderForm
            formData={formData}
            formErrors={formErrors}
            handleOrder={handleOrder}
            handleOnChange={handleOnChange}
          />
        </>
      )}
    </div>
  );
};
