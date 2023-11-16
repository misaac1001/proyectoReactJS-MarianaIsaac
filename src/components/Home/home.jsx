import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./home.css";
import { NavBar } from "../Navbar/Navbar";
import { ItemListCountainer } from "../ItemListContainer/ItemListContainer";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";

export const Home = () => {
  const onAdd = (cantidad) => {
    console.log("la cantidad seleccionada es ", cantidad);
  };
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/detalle" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ItemListCountainer />
        <ItemCounter inital={1} stock={6} onAdd={onAdd} />
      </div>
    </BrowserRouter>
  );
};
