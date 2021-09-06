import { useStateApp } from "../../Providers/StatesApp";
import { Container, InputLabel } from "./style";

const RegisterCars = () => {
  const { url } = useStateApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValues = {
      image: e.target.elements.image.value,
      brandModel: e.target.elements.brandModel.value,
      year: e.target.elements.year.value,
      plate: e.target.elements.plate.value,
      color: e.target.elements.color.value,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
    }).catch((error) => console.log(error));

    e.target.reset();
  };
  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
      <InputLabel>
        <label htmlFor="image">Imagem (URL)</label>
        <input type="text" name="image" />
      </InputLabel>

      <InputLabel>
        <label htmlFor="brandModel">Marca / Modelo</label>
        <input type="text" name="brandModel" />
      </InputLabel>

      <InputLabel>
        <label htmlFor="year">Ano</label>
        <input type="number" name="year" />
      </InputLabel>

      <InputLabel>
        <label htmlFor="plate">Placa</label>
        <input type="text" name="plate" />
      </InputLabel>

      <InputLabel className="colorContainer">
        <label htmlFor="color">Cor</label>
        <input type="color" name="color" />
      </InputLabel>

      <button type="submit">Cadastrar carro</button>
    </Container>
  );
};

export default RegisterCars;
