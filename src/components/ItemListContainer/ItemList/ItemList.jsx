import { Link } from "react-router-dom";
import { Filter } from "./Filter";

const productFilter = ({ product, filterState, handleFilterChange }) => (
  <>
    <div>
      <label> Buscar</label>
      <input
        className="form-control"
        type="text"
        value={filterState}
        onChange={handleFilterChange}
      />
    </div>
    <br />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {filterState === ""
        ? product.map((product) => (
            <div key={product.id} className="card w-25">
              <div className="card-body p-0">
                <img
                  src={product.img}
                  className="w-100"
                  alt="Imagen de planta"
                />
                <h5> {product.nombre} </h5>
                <p>Precio: {product.precio} </p>
                <p>Descripcion: {product.desc} </p>
                <p>Stock: {product.stock} </p>
                <Link to={`/detalle/${product.id}`}>
                  <button className="btn btn-outline-dark w-100">
                    Detalles
                  </button>
                </Link>
              </div>
              <div className="card-footer"></div>
            </div>
          ))
        : product
            .filter((prod) =>
              prod.nombre.toLowerCase().includes(filterState.toLowerCase())
            )
            .map((product) => (
              <div key={product.id} className="card w-25">
                <div className="card-body p-0">
                  <img
                    src={product.img}
                    className="w-100"
                    alt="Imagen de planta"
                  />
                  <h5> {product.nombre} </h5>
                  <p>Precio: {product.precio} </p>
                  <p>Descripcion: {product.desc} </p>
                  <p>Stock: {product.stock} </p>
                  <Link to={`/detalle/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">
                      Detalles
                    </button>
                  </Link>
                </div>
                <div className="card-footer"></div>
              </div>
            ))}
    </div>
  </>
);

export const ItemList = ({ product }) => {
  return <Filter product={product}>{productFilter}</Filter>;
};
