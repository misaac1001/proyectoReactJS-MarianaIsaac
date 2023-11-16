import "./home.css";
import { NavBar } from "../Navbar/Navbar";
import { ItemListCountainer } from "../ItemListContainer/ItemListContainer";
import { ItemCounter } from "../ItemCounter/ItemCounter";

export const Home = () => {
  const onAdd = (cantidad) => {
    console.log("la cantidad seleccionada es ", cantidad);
  };
  return (
    <div className="container">
      <NavBar/>
      <ItemListCountainer/>
      <ItemCounter inital={1} stock={6} onAdd={onAdd} />
    </div>
  );
};
