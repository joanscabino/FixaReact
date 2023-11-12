import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";

import "./App.css"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
         path="/" element={<ItemListContainer greeting="BIENVENIDO A FIXAMED" />} />
        <Route path="/category/ :id" element={<ItemListContainer greeting="BIENVENIDO A FIXAMED" />}
        />

        <Route path="/items/:id" element={<div>Linea Artroscopica</div>}/>
        <Route path="*" element={<Error404/>}/>

      </Routes>
      {/*/<ItemListContainer greeting="BIENVENIDO A FIXAMED"/>*/}
    </BrowserRouter>
  );
}

export default App
