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

  console.log("Productos filtrados:", filteredProducts);

  return (
    <div>
      <div>
        <label>Buscar</label>
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
        {filteredProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
