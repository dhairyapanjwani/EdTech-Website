import React from "react";
import { GlobalProvider } from "./GlobalContext";
import SignInSide from "./screens/signIn/signIn";
import SignUp from "./screens/signUp/signUp";

import Routes from "./Routes";

const App = (props) => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
};

export default App;
