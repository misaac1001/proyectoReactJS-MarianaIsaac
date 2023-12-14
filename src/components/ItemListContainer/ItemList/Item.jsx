import { memo } from "react";
import { Link } from "react-router-dom";

export const Item = memo(({ product }) => {
  return (
    <div key={product.id} className="card w-25">
      <div className="card-body p-0">
        <img src={product.img} className="w-100" alt="Imagen de planta" />
        <h5> {product.nombre} </h5>
        <p>Precio: {product.precio} </p>
        <p>Descripcion: {product.desc} </p>
        <p>Stock: {product.stock} </p>
        <Link to={`/detalle/${product.id}`}>
          <button className="btn btn-outline-dark w-100">Detalles</button>
        </Link>
      </div>
      <div className="card-footer"></div>
    </div>
  );
});
Item.displayName = "Item";
