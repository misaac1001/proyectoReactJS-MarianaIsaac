import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartContextProvider } from "../context/CartContext";
import { NavBar } from "../Navbar/Navbar";
import { ItemListCountainer } from "../ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../ItemCounter/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "../CartContainer/CartContainer";
import "./home.css";

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
            <Route path="/category/:cid" element={<ItemListCountainer />} />
            <Route path="/detalle/:pid" element={<ItemDetailContainer />} />
            <Route path="/CartContainer" element={<CartContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <footer className="footer mt-auto py-3 bg-light">
            <div className="container text-center">
              <p className="mb-0">
                &copy; Mariana Isaac 2023. Todos los derechos reservados.
              </p>
            </div>
          </footer>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
};
