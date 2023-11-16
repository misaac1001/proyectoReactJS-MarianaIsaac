import { useEffect, useState } from "react";
import { miFetch } from "../helpers/miFetch";
import { ItemList } from "./ItemList/ItemList";

export const ItemListCountainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    miFetch()
      .then((respuesta) => setProduct(respuesta))
      .catch((error) => console.log(error));
  }, []);
  console.log(product);
  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList product={product} />
    </div>
  );
};
