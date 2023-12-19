import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../Loading/Loading";

export const Item = ({ product }) => {
  const [loading, setLoading] = useState(true);

  // Utiliza useEffect para cargar los detalles del producto cuando el componente se monta
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const dbFirestore = getFirestore();
        const productDoc = doc(dbFirestore, "products", product.id);
        const productData = await getDoc(productDoc);

        if (productData.exists()) {
          // Actualiza el estado con los detalles del producto desde Firebase
          // Puedes realizar acciones adicionales según tus necesidades
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

    // Llama a la función para cargar los detalles del producto
    fetchProductDetails();
  }, [product.id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="card w-25">
          <div className="card-body p-0">
            <img src={product.img} className="w-100" alt="Imagen de planta" />
            <h5> {product.nombre} </h5>
            <p>Precio: {product.precio} </p>
            <p>Descripcion: {product.desc} </p>
            <p>Stock: {product.stock} </p>
            <Link to={`/detalle/${product.id}`}>
              <button className="btn btn-outline-dark w-100">Detalles</button>
            </Link>
          </div>
          <div className="card-footer"></div>
        </div>
      )}
    </>
  );
};
