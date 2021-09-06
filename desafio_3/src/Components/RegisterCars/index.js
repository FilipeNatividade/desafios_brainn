import { useState } from "react";
import { useStateApp } from "../../Providers/StatesApp";
import { Container, InputLabel } from "./style";

const RegisterCars = () => {
  const { url } = useStateApp();

  const [valuesInput, setValuesInput] = useState({});

  console.log(valuesInput)

  const handleSubmit = (e) => {
    e.preventDefault();
    setValuesInput({
      image: e.target.elements.image.value,
      brandModel: e.target.elements.brandModel.value,
      year: e.target.elements.year.value,
      plate: e.target.elements.plate.value,
      color: e.target.elements.color.value,
    });

    // const result = fetch(url, {
    //   method:'POST',
    //   headers: {
    //     Accept: "application/json",
    //   "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log(response));
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
      <InputLabel>
        <label for="image">Imagem (URL)</label>
        <input type="text" name="image" />
      </InputLabel>

      <InputLabel>
        <label for="brandModel">Marca / Modelo</label>
        <input type="text" name="brandModel" />
      </InputLabel>

      <InputLabel>
        <label for="year">Ano</label>
        <input type="number" name="year" />
      </InputLabel>

      <InputLabel>
        <label for="plate">Placa</label>
        <input type="text" name="plate" />
      </InputLabel>

      <InputLabel className="colorContainer">
        <label for="color">Cor</label>
        <input type="color" name="color" />
      </InputLabel>

      <button type="submit">Cadastrar carro</button>
    </Container>
  );
};

export default RegisterCars;
