import { useState } from "react";
import { Navbar } from "../../layout/navbar/Navbar";
import { ItemList } from "../itemList/ItemList";

export const Home = () => {
  const [saludos, setSaludo] = useState("hola que tal");
  const saludo = (nuevoSaludo) => {
    setSaludo(nuevoSaludo);
  };
  return (
    <div>
      <Navbar />
      <ItemList saludos={saludos} saludo={saludo} />
    </div>
  );
};
