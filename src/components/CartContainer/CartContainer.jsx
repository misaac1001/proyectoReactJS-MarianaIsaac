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
  const [isId, setIsId] = useState("");
  const {
    cartList,
    vaciarCarrito,
    eliminarProductId,
    cantTotalProduct,
    precioTotalProduct,
  } = UseCartContext();

  const [cartProducts, setCartProducts] = useState([]);

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

    // Restablecer errores
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
    order.total = precioTotalProduct();

    const db = getFirestore();
    const orderColection = collection(db, "orders");
    addDoc(orderColection, order)
      .then((docRef) => getDoc(docRef))
      .then((docSnapshot) => {
        console.log("Documento creado:", docSnapshot.data());
      })
      .then((resp) => setIsId(resp.id))
      .catch((err) => console.log(err));
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
    vaciarCarrito();
    cartProducts.forEach((product) => eliminarProductId(product.id));
  };

  return (
    <div className="container">
      <h1>Carrito de Compras</h1>
      {cartProducts.length === 0 ? (
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
          {cartProducts.map((product) => (
            <div key={product.id}>
              <img className="w-20" src={product.img} alt="" />
              <h2>Nombre: {product.nombre}</h2>
              <p>Cantidad: {product.cantidad}</p>
              <p>Precio por unidad es: $ {product.precio}</p>
              <p>Subtotal: {product.subtotal}</p>
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
          <form onSubmit={handleOrder}>
            <label>Ingresar name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
            />
            <div className="error-message">{formErrors.name}</div>

            <label>Ingresar telefono</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleOnChange}
            />
            <div className="error-message">{formErrors.phone}</div>

            <label>Ingresar correo electrónico</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
            />
            <div className="error-message">{formErrors.email}</div>
            <label>Confirmar correo electrónico</label>
            <input
              type="text"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleOnChange}
            />
            <div className="error-message">{formErrors.confirmEmail}</div>

            <button className="btn btn-outline-primary">Terminar Compra</button>
          </form>
          <button className="btn btn-danger" onClick={handleCheckout}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};
