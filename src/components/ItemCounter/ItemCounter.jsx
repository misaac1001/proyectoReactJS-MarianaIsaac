import { useCounter } from "../Hook/useCounter";

export const ItemCounter = ({ inital = 1, stock = 6, onAdd }) => {
  const { counter, handleSumar, handleRestar } = useCounter({
    min: inital,
    max: stock,
  });

  const handleOnAdd = () => {
    onAdd(counter);
  };
  return (
    <div className="w-25">
      <label> {counter} </label>
      <button onClick={handleSumar}>+</button>
      <button onClick={handleRestar}>-</button>
      <button onClick={handleOnAdd}>Agregar al Carrito</button>
    </div>
  );
};
