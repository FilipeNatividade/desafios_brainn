import { useHistory } from "react-router-dom";
import { Container } from "./style";

function Menu() {
  const history = useHistory();

  return (
    <Container>
      <button onClick={()=>history.push('/')}>Todos os carros</button>
      <button onClick={()=>history.push('/register')}>Cadastrar novo carro</button>
      <button onClick={()=>history.push('/delete')}>Deletar carro</button>
    </Container>
  );
}

export default Menu;
