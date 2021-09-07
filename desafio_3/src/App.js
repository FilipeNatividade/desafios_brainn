import GlobalStyle from "./GlobalStyle/style";
import GetCars from "./Components/GetCars";
import RegisterCars from './Components/RegisterCars'

const App = () => {

  return (
    <div >
      <GlobalStyle/>
      <RegisterCars/>
      <GetCars/>
    </div>
  );
};

export default App;
