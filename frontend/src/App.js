import React from "react";
import { GlobalProvider } from "./GlobalContext";
import SignInSide from "./screens/signIn/signIn";
import SignUp from "./screens/signUp/signUp";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

import Routes from "./Routes";

const App = (props) => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
};

export default App;
