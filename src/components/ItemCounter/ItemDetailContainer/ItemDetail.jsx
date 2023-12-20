import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { UseCartContext } from "../../context/CartContext";
import Intercambiabilidad from "../Intercambiabilidad";
import { Loading } from "../../Loading/Loading";

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
    <div className="container mt-5">
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col-md-6">
            <img src={product.img} alt={product.nombre} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{product.nombre}</h2>
            <p>Descripción: {product.desc}</p>
            <p>Precio: ${product.precio}</p>
            <p>Stock: {product.stock}</p>
            <Intercambiabilidad
              handleOnAdd={(cantidad) => onAdd(cantidad)}
              stock={product.stock}
            />
          </div>
        </div>
      )}
    </div>
  );
};
