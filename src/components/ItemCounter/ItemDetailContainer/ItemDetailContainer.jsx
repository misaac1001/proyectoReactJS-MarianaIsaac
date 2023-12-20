import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Loading } from "../../Loading/Loading";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const { pid } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const dbFirestore = getFirestore();
        const productDoc = doc(dbFirestore, "products", pid);
        const productData = await getDoc(productDoc);

        if (productData.exists()) {
          setLoading(false);
        } else {
          console.log("No se encontraron datos para el ID proporcionado");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [pid]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          {loading ? (
            <Loading />
          ) : (
            <div>
              <h1 className="mb-4">Detalle del Producto</h1>
              <ItemDetail productId={pid} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
