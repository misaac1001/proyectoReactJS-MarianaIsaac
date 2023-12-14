import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";

export const CartContainer = () => {
  const {
    cartList,
    vaciarCarrito,
    eliminarProductId,
    cantTotalProduct,
    precioTotalProduct,
  } = UseCartContext();
  return (
    <div className="container">
      <h1>Carrito de Compras</h1>
      {cartList.length === 0 ? (
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
          {cartList.map((product) => (
            <div key={+product.id}>
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
          <button className="btn btn-danger" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};
