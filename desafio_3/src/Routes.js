import { Route, Switch } from "react-router";
import DeleteCars from "./Components/DeleteCars";
import RegisterCars from "./Components/RegisterCars";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/register">
        <RegisterCars />
      </Route>

      <Route exact path="/delete">
        <DeleteCars />
      </Route>
    </Switch>
  );
};

export default Routes;
