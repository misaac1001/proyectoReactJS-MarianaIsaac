import { useEffect, useState } from "react";
/* import { miFetch } from "../helpers/miFetch"; 
import { useParams } from "react-router-dom";*/
import { ItemList } from "./ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
export const ItemListCountainer = ({ greeting }) => {
  const [products, setProducts] = useState({});
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
/*   useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDoc = doc(dbFirestore, 'products', '8ybPJJhvuuF7FfqqdgBn' );
    getDoc(queryDoc)
      .then((resultado) => {
        if (resultado.exists()) {
          setProducts({id: resultado.id, ...resultado.data()})
          console.log(resultado)
        } else {
          console.log("No se encontraron datos para el ID proporcionado");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(products)
 */
useEffect(()=> {
  const dbFirestore = getFirestore()
  const queryCollection = collection(dbFirestore, 'products' )
  getDocs(queryCollection)
  .then(resp=>setProducts(resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
  .catch(err=>console.log(err))
  .finally(()=>setLoading(false))
}, []);

console.log(products)
  return (
    <>
      <h2>Bienvenidos a: {greeting}</h2>
      {loading ? <Loading /> : <ItemList product={products} />}
    </>
  );
};

/* 1.34 firebase 1 */
