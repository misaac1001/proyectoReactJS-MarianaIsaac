import { useState } from "react";
import { ItemList } from "../itemList/ItemList";
import NavBar from "../../layout/Navbar/Navbar";
import "./home.css";

export const Home = () => {
  const [saludos, setSaludo] = useState("hola que tal");
  const saludo = (nuevoSaludo) => {
    setSaludo(nuevoSaludo);
  };
  return (
    <div>
      <NavBar />
      <ItemList saludos={saludos} saludo={saludo} />
    </div>
  );
};
