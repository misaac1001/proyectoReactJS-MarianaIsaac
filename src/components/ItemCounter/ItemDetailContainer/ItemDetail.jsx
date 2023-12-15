import { useEffect, useState } from "react";
import Intercambiabilidad from "../Intercambiabilidad";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { UseCartContext } from "../../context/CartContext";

export const ItemDetail = ({ productId }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { addProduct } = UseCartContext();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const dbFirestore = getFirestore();
        const productDoc = doc(dbFirestore, "products", productId);
        const productData = await getDoc(productDoc);

        if (productData.exists()) {
          setProduct({ id: productData.id, ...productData.data() });
        } else {
          console.log("No se encontraron datos para el ID proporcionado");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  
  const onAdd = (cantidad) => {
    addProduct({ ...product, cantidad });
  };

  return (
    <div className="row">
      <div className="col-12 text-center mt-5">
        <h1>Detalle del Producto </h1>
      </div>
      <div className="col-6 text-center mt-5">
        <img src={product.img} alt={product.nombre} className="img-fluid" />
        <h2> {product.nombre} </h2>
      </div>
      <div className="col-6 mt-5">
        <h5>Descripcion: {product.desc} </h5>
        <h5>Precio: {product.precio} </h5>
        <h5>Stock: {product.stock} </h5>
        <Intercambiabilidad
          handleOnAdd={(cantidad) => onAdd(cantidad)}
          stock={product.stock}
        />
      </div>
    </div>
  );
};
