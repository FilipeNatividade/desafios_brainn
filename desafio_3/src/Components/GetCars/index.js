import { useEffect } from "react";
import { useStateApp } from "../../Providers/StatesApp";
const GetCars = () => {
  const { url } = useStateApp();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, [url]);
  return (
    <div>
      <h1>get cars</h1>
    </div>
  );
};

export default GetCars;
