import React from "react";
import { GlobalProvider } from "./GlobalContext";
import Routes from "./Routes";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <GlobalProvider>
      <Routes />
      <Footer />
    </GlobalProvider>
  );
};

export default App;
