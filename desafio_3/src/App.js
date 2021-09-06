import GlobalStyle from "./GlobalStyle/style";
import Menu from "./Components/Menu";
import Routes from "./Routes";
import GetCars from "./Components/GetCars";

const App = () => {

  return (
    <div >
      <GlobalStyle/>
      <Menu />
      <Routes />
      <GetCars/>
    </div>
  );
};

export default App;
