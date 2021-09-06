import { useStateApp } from "../../Providers/StatesApp";
import { Container, Cards, Paragraph, ColorCar } from "./style";

const GetCars = () => {
  const { result } = useStateApp();

  return (
    <Container>
      {result.map((item) => (
        <Cards key={item.plate}>
          <img src={item.image} alt={item.brandModel} />
          <h2>{item.brandModel}</h2>
          <Paragraph>
            Cor: <ColorCar colorCar={item.color} />
          </Paragraph>
          <Paragraph>Placa: <span>{item.plate}</span></Paragraph>
          <Paragraph>Ano: <span>{item.year}</span></Paragraph>
        </Cards>
      ))}
    </Container>
  );
};

export default GetCars;
