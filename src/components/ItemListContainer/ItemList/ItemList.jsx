import { useState } from "react";
import { Item } from "./Item";

export const ItemList = ({ products }) => {
  const [filterState, setFilterState] = useState("");

  const handleFilterChange = (event) => {
    setFilterState(event.target.value);
  };

  const filteredProducts = filterState
    ? products.filter((prod) =>
        prod.nombre.toLowerCase().includes(filterState.toLowerCase())
      )
    : products;

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="searchInput" className="form-label">
          Buscar
        </label>
        <input
          id="searchInput"
          className="form-control"
          type="text"
          value={filterState}
          onChange={handleFilterChange}
        />
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {filteredProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
