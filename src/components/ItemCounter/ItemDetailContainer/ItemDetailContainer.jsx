import { useEffect, useState } from "react";
import { miFetch } from "../../helpers/miFetch";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Loading } from "../../Loading/Loading";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { pid } = useParams();
  useEffect(() => {
    miFetch(pid)
      .then((respuesta) => setProduct(respuesta))
      .finally(() => setLoading(false))
      .catch((error) => console.log(error));
  }, [pid]);
  return <>{loading ? <Loading /> : <ItemDetail product={product} />}</>;
};
