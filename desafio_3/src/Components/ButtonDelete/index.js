import { useStateApp } from "../../Providers/StatesApp";
import Message from "../Message";
import { Container } from "./style";

const ButtonDelete = ({ car }) => {
  const { url, message, setMessage } = useStateApp();

  const deleteCars = () => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plate: car }),
    })
      .then((response) => response.json())
      .then(
        (response) =>
          response.error &&
          setMessage({
            error: response.error,
            text: response.message,
          })
      );

    setInterval(() => {
      setMessage({ error: false, text: "" });
    }, 3000);
  };

  return (
    <Container>
      {message.error && <Message text={message.text} />}
      <button onClick={deleteCars}>Excluir</button>
    </Container>
  );
};
export default ButtonDelete;
