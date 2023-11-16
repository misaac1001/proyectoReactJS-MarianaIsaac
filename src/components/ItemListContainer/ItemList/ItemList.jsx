import { Filter } from "./Filter"


const productFilter = ({product, filterState, handleFilterChange}) => {
  <>
  <div>
      <label > Buscar</label>
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
        { filterState ===''
    ? 
    product.map((productos) => (
      <div key={productos.id} className="card w-25">
        <div className="card-body p-0">
          <img
            src={productos.img}
            className="w-100"
            alt="Imagen de planta"
          />
          <h5> {productos.nombre} </h5>
          <p>Precio: {productos.precio} </p>
          <p>Descripcion: {productos.desc} </p>
          <p>Stock: {productos.stock} </p>
          <button className="btn btn-outline-dark w-100">Detalles</button>
        </div>
        <div className="card-footer"></div>
      </div>
    ))
    : 
    product
    .filter (prod.nombre.toLowerCase().includes(filterState))
    .map(product => <div key={product.id} className="card w-25"> 
            <div className="card-body p-0">
              <img
                src={productos.img}
                className="w-100"
                alt="Imagen de planta"
              />
              <h5> {productos.nombre} </h5>
              <p>Precio: {productos.precio} </p>
              <p>Descripcion: {productos.desc} </p>
              <p>Stock: {productos.stock} </p>
              <button className="btn btn-outline-dark w-100">Detalles</button>
            </div>
            <div className="card-footer"></div>
          </div>
        )}
      </div>
  </>
}

export const ItemList = ({product}) => {
  return (
    <Filter product={product}> 
      {productFilter}
    </Filter>
    


    {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {product.map((productos) => (
          <div key={productos.id} className="card w-25">
            <div className="card-body p-0">
              <img
                src={productos.img}
                className="w-100"
                alt="Imagen de planta"
              />
              <h5> {productos.nombre} </h5>
              <p>Precio: {productos.precio} </p>
              <p>Descripcion: {productos.desc} </p>
              <p>Stock: {productos.stock} </p>
              <button className="btn btn-outline-dark w-100">Detalles</button>
            </div>
            <div className="card-footer"></div>
          </div>
        ))}
      </div> */}
  )
}

