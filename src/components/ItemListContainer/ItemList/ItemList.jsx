import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { Item } from "./Item";

export const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterState, setFilterState] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const dbFirestore = getFirestore();
        const productsCollection = collection(dbFirestore, "products");
        const queryCollection = query(productsCollection);

        const snapshot = await getDocs(queryCollection);
        const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (event) => {
    setFilterState(event.target.value);
  };

  const filteredProducts = filterState
  ? products.filter((prod) => {
      const includes = prod.nombre.toLowerCase().includes(filterState.toLowerCase());
      console.log(`${prod.nombre} - Filter: ${includes}`);
      return includes;
    })
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
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          filteredProducts.map((product) => (
            <Item key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};









