import { useContext } from "react";
import Intercambiabilidad from "../Intercambiabilidad";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addProduct({ ...product, cantidad });
  };
  return (
    <div className="row">
      <div className="col-12 text-center mt-5">
        <h1>Detalle del Producto </h1>
      </div>
      <div className="col-6 text-center mt-5">
        <img src={product.img} alt={product.nombre} className="img-fluid" />
        <h2> {product.nombre} </h2>
      </div>
      <div className="col-6 mt-5">
        <h5>Descripcion: {product.desc} </h5>
        <h5>Precio: {product.precio} </h5>
        <h5>Stock: {product.stock} </h5>
        <Intercambiabilidad
          handleOnAdd={(cantidad) => onAdd(cantidad)}
          stock={product.stock}
        />
      </div>
    </div>
  );
};
