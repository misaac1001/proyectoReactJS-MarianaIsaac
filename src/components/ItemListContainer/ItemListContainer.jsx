import { useEffect, useState } from "react";
import { miFetch } from "../helpers/miFetch";
import { ItemList } from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListCountainer = ({ greeting }) => {
  const [products, setProduct] = useState([]);
  const { cid } = useParams();
  useEffect(() => {
    if (cid) {
      miFetch()
        .then((respuesta) =>
          setProduct(respuesta.filter((product) => product.categoria === cid))
        )
        .catch((error) => console.log(error));
    } else {
      miFetch()
        .then((respuesta) => setProduct(respuesta))
        .catch((error) => console.log(error));
    }
  }, [cid]);
  console.log(cid);
  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList product={products} />
    </div>
  );
};
