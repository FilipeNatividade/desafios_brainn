import { useStateApp } from "../../Providers/StatesApp";
import { Container } from "./style";

const Button = ({ car }) => {
  const { url } = useStateApp();

  const deleteCars = () => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plate: car }),
    })
      .then((response) => response.json())
      .catch((error) => ({
        error: true,
        message: error.message,
      }));

    // if (result.error === true) {
    //   messages(result.message);
    // }
  };

  return (
    <Container>
      <button onClick={deleteCars}>Excluir</button>
    </Container>
  );
};
export default Button;
