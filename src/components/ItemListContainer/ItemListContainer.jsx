import { useEffect, useState } from "react";
import { miFetch } from "../helpers/miFetch";
import { ItemList } from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
export const ItemListCountainer = ({ greeting }) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
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
  }, [cid]);

  return (
    <>
      <h2>Bienvenidos a: {greeting}</h2>
      {loading ? <Loading /> : <ItemList product={products} />}
    </>
  );
};
