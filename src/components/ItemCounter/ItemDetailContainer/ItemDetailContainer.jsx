import { useEffect, useState } from "react";

import { useParams } from "react-router-dom"; 
import { ItemDetail } from "./ItemDetail";
import { Loading } from "../../Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { pid } = useParams(); // Obtener el parámetro de la URL

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDoc = doc(dbFirestore, "products", pid); // Utilizar el ID del parámetro
    getDoc(queryDoc)
      .then((resultado) => {
        if (resultado.exists()) {
          setProduct({ id: resultado.id, ...resultado.data() });
        } else {
          console.log("No se encontraron datos para el ID proporcionado");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [pid]); // Agregar pid a la dependencia del useEffect

  console.log(product);

  return <>{loading ? <Loading /> : <ItemDetail productId={pid} />}</>;
};