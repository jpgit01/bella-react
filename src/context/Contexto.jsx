import React, { createContext } from 'react';
import vestidos from "../public/Vestidos.json"

export const MiContexto = createContext();

const Contexto = ({ children }) => {
  const datosIniciales = vestidos
  return (
    <MiContexto.Provider value={{ 
      datos: datosIniciales
    }}>
      {children}
    </MiContexto.Provider>
  );
};

export default Contexto;
