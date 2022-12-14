import { createBrowserHistory } from "history";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Temp from "./admin/Temp";
import SignInSide from "./screens/signIn/signIn";
import SignUp from "./screens/signUp/signUp";
import Home from "./screens/home/Home";

const Routes = (props) => {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>

      <Switch>
        
        <Route path="/admin" component={Temp} exact />
        <Route path="/login" component={SignInSide} exact />
        <Route path="/register" component={SignUp} exact />
        <Route path="/home" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
