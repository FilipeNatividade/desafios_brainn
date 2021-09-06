import { Route, Switch } from "react-router";
import DeleteCars from "./Components/DeleteCars";
import RegisterCars from "./Components/DeleteCars";
import GetCars from "./Components/GetCars";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <GetCars />
      </Route>

      <Route path="/register">
        <RegisterCars />
      </Route>

      <Route path="/delete">
        <DeleteCars />
      </Route>
    </Switch>
  );
};

export default Routes;
