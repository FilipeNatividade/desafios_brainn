import { useStateApp } from "../../Providers/StatesApp";
import { Container,InputLabel } from "./style";

const RegisterCars = () => {
  const { url } = useStateApp();

  const handleSubmit = ( ) => {
    fetch(url, 'POST')
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  return (
    <Container>
        <InputLabel>
          <label for="image">Imagem (URL)</label>
          <input type="text" id="image" name="image" />
        </InputLabel>

        <InputLabel>
          <label for="brand-model">Marca / Modelo</label>
          <input type="text" id="brand-model" name="brand-model" />
        </InputLabel>

        <InputLabel>
          <label for="year">Ano</label>
          <input type="number" id="year" name="year" />
        </InputLabel>

        <InputLabel>
          <label for="plate">Placa</label>
          <input type="text" id="plate" name="plate" />
        </InputLabel>

        <InputLabel className='colorContainer'>
          <label for="color">Cor</label>
          <input type="color" id="color" name="color" />
        </InputLabel>

        <button type="submit">Cadastrar carro</button>
    </Container>
  );
};

export default RegisterCars;
