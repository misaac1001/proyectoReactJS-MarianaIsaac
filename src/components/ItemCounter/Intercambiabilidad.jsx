import { Link } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { useState } from "react";

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
    <center>
      <h2>Item Description</h2>
      {inputType ? (
        <ItemCounter stock={stock} onAdd={handleInter} />
      ) : (
        <InputCount />
      )}
    </center>
  );
};

export default Intercambiabilidad;
