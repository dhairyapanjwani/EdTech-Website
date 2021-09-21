import React from "react";
import { GlobalProvider } from "./GlobalContext";
import Routes from "./Routes";

const App = (props) => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
};

export default App;
