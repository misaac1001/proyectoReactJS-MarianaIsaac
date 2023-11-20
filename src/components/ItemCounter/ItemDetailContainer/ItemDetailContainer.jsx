import { useEffect, useState } from "react";
import { miFetch } from "../../helpers/miFetch";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { pid } = useParams();
  useEffect(() => {
    miFetch(pid)
      .then((respuesta) => setProduct(respuesta))
      .catch((error) => console.log(error));
  }, [pid]);
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
      </div>
    </div>
  );
};
