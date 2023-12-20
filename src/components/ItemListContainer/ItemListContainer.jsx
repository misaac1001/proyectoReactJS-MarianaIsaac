import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
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
          console.log("Filtrando por categoría:", cid);
          baseQuery = query(productsCollection, where("categoria", "==", cid));
        }

        const snapshot = await getDocs(baseQuery);
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Productos filtrados:", productsData);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cid]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Bienvenidos a: {greeting}</h2>
      {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};
