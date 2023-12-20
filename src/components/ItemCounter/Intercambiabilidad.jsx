import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter";

const InputCount = () => {
  return (
    <>
      <Link to="/CartContainer">
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log("Ir a cart")}
        >
          Ir al Carrito o Terminar compra
        </button>
      </Link>
      <Link to="/">
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log("Ir al home")}
        >
          Seguir comprando
        </button>
      </Link>
    </>
  );
};

const Intercambiabilidad = ({ handleOnAdd, stock }) => {
  const [inputType, setInputType] = useState(true);

  const handleInter = (cantidad) => {
    setInputType(false);
    handleOnAdd(cantidad);
  };

  return (
    <div className="text-center mt-3">
      {inputType ? (
        <ItemCounter stock={stock} onAdd={handleInter} />
      ) : (
        <InputCount />
      )}
    </div>
  );
};

export default Intercambiabilidad;
