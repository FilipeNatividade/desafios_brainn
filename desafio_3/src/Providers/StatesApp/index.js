import { createContext, useContext, useState } from "react";

const StatesAppContext = createContext();

export const StatesAppProvider = ({ children }) => {
  const url = "http://localhost:3333/cars";
  return(
    <StatesAppContext.Provider
    value={{
        url
    }}
    >
        {children}
    </StatesAppContext.Provider>
  )
};
export const useStateApp = () => useContext(StatesAppContext);
