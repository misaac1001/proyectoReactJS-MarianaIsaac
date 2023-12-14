import { useEffect, useState } from "react";
/* import { miFetch } from "../helpers/miFetch"; 
import { useParams } from "react-router-dom";*/
import { ItemList } from "./ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";
export const ItemListCountainer = ({ greeting }) => {
  const [product, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  /*   const [products, setProduct] = useState([]);
  
  const { cid } = useParams();*/

  /*  useEffect(() => {
    if (cid) {
      miFetch()
        .then((respuesta) =>
          setProduct(respuesta.filter((product) => product.categoria === cid))
        )
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      miFetch()
        .then((respuesta) => setProduct(respuesta))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [cid]); */
  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDoc = doc(dbFirestore, "product", "8ybPJJhvuuF7FfqqdgBn");
    getDoc(queryDoc)
      .then((resultado) =>
        setProducts({ id: resultado.id, ...resultado.data() })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Bienvenidos a: {greeting}</h2>
      {loading ? <Loading /> : <ItemList product={products} />}
    </>
  );
};

/* 1.34 firebase 1 */
