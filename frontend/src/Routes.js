import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

import Temp from "./admin/Temp";

const Routes = (props) => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route path="/admin" component={Temp} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
