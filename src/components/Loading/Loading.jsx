import { useEffect } from "react";

export const Loading = () => {
  useEffect(() => {
    return () => {
      console.log("desmontando");
    };
  });
  return <h2>Cargando ando .....</h2>;
};
