import { useState } from "react";

export const ItemCounter = ({ initial = 1, stock = 6, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handleSumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleRestar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(counter);
  };

  return (
    <div className="w-25">
      <label> {counter} </label>
      <button onClick={handleSumar} disabled={counter === stock}>
        +
      </button>
      <button onClick={handleRestar} disabled={counter === 1}>
        -
      </button>
      <button onClick={handleOnAdd}>Agregar al Carrito</button>
    </div>
  );
};
