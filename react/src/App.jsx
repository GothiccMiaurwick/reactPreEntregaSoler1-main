import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext";
import Carrito from "./components/Carrito/Carrito";
import RenderingCondicional from "./RenderingCondicional/RenderingCondicional";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route path="rendering" element={<RenderingCondicional/>} />
          <Route path="/carrito" element={<Carrito />} />
          <Route
            path="*"
            element={<div>Sitio no encontrado por favor vuelva</div>}
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
