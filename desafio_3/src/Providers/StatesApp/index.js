import { createContext, useContext, useEffect, useState } from "react";

const StatesAppContext = createContext();

export const StatesAppProvider = ({ children }) => {
  const url = "http://localhost:3333/cars";

  const [result, setResult] = useState([]);
  const [message, setMessage] = useState({
    error: false,
    text: "",
  });

  useEffect(() => {
    const getRequest = () => {
      fetch(url)
        .then((response) => response.json())
        .then((responde) => {
          setResult(responde)})
    };

    getRequest();

    return () => {};
  }, [result.palte]);

  return (
    <StatesAppContext.Provider
      value={{
        url,
        result,
        message,
        setMessage,
      }}
    >
      {children}
    </StatesAppContext.Provider>
  );
};
export const useStateApp = () => useContext(StatesAppContext);
