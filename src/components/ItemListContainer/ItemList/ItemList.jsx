import { Filter } from "./Filter";
import { Item } from "./Item";

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
        ? product.map((product) => <Item key={product.id} product={product} />)
        : product
            .filter((prod) =>
              prod.nombre.toLowerCase().includes(filterState.toLowerCase())
            )
            .map((product) => <Item key={product.id} product={product} />)}
    </div>
  </>
);

export const ItemList = ({ product }) => {
  return <Filter product={product}>{productFilter}</Filter>;
};
