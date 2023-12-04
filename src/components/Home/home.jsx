import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./home.css";
import { NavBar } from "../Navbar/Navbar";
import { ItemListCountainer } from "../ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../ItemCounter/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "../context/CartContext";
import { CartContainer } from "../CartContainer/CartContainer";

export const Home = () => {
  return (
    <BrowserRouter>
      <CartContextProvider value={{}}>
        <div className="container">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListCountainer greeting="Jardin de Marian" />}
            />
            <Route path="/categoria/:cid" element={<ItemListCountainer />} />
            <Route path="/detalle/:pid" element={<ItemDetailContainer />} />
            <Route path="/CartContainer" element={<CartContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
};
