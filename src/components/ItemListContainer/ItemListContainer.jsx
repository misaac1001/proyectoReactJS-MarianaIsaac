import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { ItemList } from "./ItemList/ItemList";

export const ItemListCountainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const dbFirestore = getFirestore();
        const productsCollection = collection(dbFirestore, "products");

        let baseQuery = query(productsCollection);

        if (cid) {
          baseQuery = query(productsCollection, where("categoria", "==", cid));
        }

        const snapshot = await getDocs(baseQuery);
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
      } catch (error) {  console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, [cid]);

console.log("Productos cargados:", products);

return (
  <div>
    <h2>Bienvenidos a: {greeting}</h2>
    {loading ? <Loading /> : <ItemList products={products} />}
  </div>
);
};


