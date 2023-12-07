import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer 6";
import { Error404 } from "./components/Error404";

import "./App.css"
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContexts";
import { Cart } from "./components/Cart";



function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
         path="/" element={<ItemListContainer greeting="Productos" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Productos" />}
        />

        <Route path="/items/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element ={<Cart/>}/>
        <Route path="*" element={<Error404/>}/>

      </Routes>
      {/*/<ItemListContainer greeting="BIENVENIDO A FIXAMED"/>*/}
    </BrowserRouter>
    </CartProvider>
  );
}

export default App
