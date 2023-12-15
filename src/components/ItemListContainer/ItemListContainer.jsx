import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
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
  
        // Crear una consulta base
        let baseQuery = query(productsCollection);
  
        // Si hay un parámetro de categoría, agregar el filtro
        if (cid) {
          baseQuery = query(productsCollection, where("categoria", "==", cid));
        }
  
        const snapshot = await getDocs(baseQuery);
        const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    if (cid) {
      fetchProducts();
    } else {
      setProducts([]); // Limpiar productos si no hay categoría seleccionada
      setLoading(false);
    }
  }, [cid]); // Agrega 'cid' como dependencia para que se ejecute cada vez que cambie

  console.log("Productos cargados:", products);
 

  return (
    <div>
      <h2>Bienvenidos a: {greeting}</h2>
      {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};
