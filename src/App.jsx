import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";
import Colecciones from "./views/Colecciones";
import Contacto from "./views/Contacto";



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
          path="/contacto"
          element={<Contacto />}
        />
      </Routes>
    </>
  );
};
export default App;
