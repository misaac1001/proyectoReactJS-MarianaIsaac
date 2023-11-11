export const ItemList = ({ saludos, saludo }) => {
  return (
    <div>
      <h2>{saludos}</h2>
      <button onClick={() => saludo("Muy bien vos?")}>Cambiar saludo</button>
    </div>
  );
};
