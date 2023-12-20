import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../Loading/Loading";

export const Item = ({ product }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const dbFirestore = getFirestore();
        const productDoc = doc(dbFirestore, "products", product.id);
        const productData = await getDoc(productDoc);

        if (productData.exists()) {
          console.log("Detalles del producto cargados:", productData.data());
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
  }, [product.id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="card mb-3" style={{ maxWidth: "18rem" }}>
          <img
            src={product.img}
            className="card-img-top"
            alt="Imagen de planta"
          />
          <div className="card-body">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">Precio: {product.precio}</p>
            <p className="card-text">Descripción: {product.desc}</p>
            <p className="card-text">Stock: {product.stock}</p>
            <Link to={`/detalle/${product.id}`}>
              <button className="btn btn-outline-dark w-100">Detalles</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
