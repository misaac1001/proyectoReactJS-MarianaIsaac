import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import ItemList from "./components/pages/itemList/ItemList";

function App() {
  const [saludos, setSaludo] = useState("hola que tal");
  const saludo = (nuevoSaludo) => {
    setSaludo(nuevoSaludo);
  };
  return (
    <>
      <Navbar />
      <ItemList
        saludos={saludos}
        saludo={saludo}
      />
    </>
  );
}

export default App;
