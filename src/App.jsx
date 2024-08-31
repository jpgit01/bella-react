import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";
import Colecciones from "./views/Colecciones";
import Contacto from "./views/Contacto";

import Footer from "./components/Footer";

import DetalleColeccion from "./components/DetalleColeccion.jsx";
import DetalleVestido from "./components/DetalleVestido.jsx";



const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path="/colecciones"
          element={<Colecciones />}
        />
       <Route 
          path="/coleccion/:nombre" 
          element={<DetalleColeccion />} />

        <Route 
          path="/coleccion/:nombre/vestido/:id" 
          element={<DetalleVestido />} />
        
        <Route
          path="/contacto"
          element={<Contacto />}
        />
      </Routes>
      <Footer/>
    </>
  );
};
export default App;
