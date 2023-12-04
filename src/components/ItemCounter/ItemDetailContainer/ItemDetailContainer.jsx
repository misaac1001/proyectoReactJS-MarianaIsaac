import { useEffect, useState } from "react";
import { miFetch } from "../../helpers/miFetch";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { pid } = useParams();
  useEffect(() => {
    miFetch(pid)
      .then((respuesta) => setProduct(respuesta))
      .catch((error) => console.log(error));
  }, [pid]);
  return <ItemDetail product={product} />;
};
