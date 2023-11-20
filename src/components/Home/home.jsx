import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./home.css";
import { NavBar } from "../Navbar/Navbar";
import { ItemListCountainer } from "../ItemListContainer/ItemListContainer";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { ItemDetailContainer } from "../ItemCounter/ItemDetailContainer/ItemDetailContainer";

export const Home = () => {
  const onAdd = (cantidad) => {
    console.log("la cantidad seleccionada es ", cantidad);
  };
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListCountainer />} />
          <Route path="/categoria/:cid" element={<ItemListCountainer />} />
          <Route path="/detalle/:pid" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <ItemCounter inital={1} stock={6} onAdd={onAdd} />
      </div>
    </BrowserRouter>
  );
};
