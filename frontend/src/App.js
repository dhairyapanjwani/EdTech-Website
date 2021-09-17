import React from "react";
import { GlobalProvider } from "./GlobalContext";
import SignInSide from "./screens/signIn/signIn";
import SignUp from "./screens/signUp/signUp";

import Navbar from './components/navbar/Navbar';

import Routes from "./Routes";

const App = (props) => {
  return (
    <GlobalProvider>
      <Navbar />
      <Routes />
    </GlobalProvider>
  );
};

export default App;
