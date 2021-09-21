import React from "react";
import { GlobalProvider } from "./GlobalContext";
<<<<<<< HEAD
=======

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
>>>>>>> a7648804c4b8052f11f7df05f8e49808b4f85ddf
import Routes from "./Routes";

const App = (props) => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
};

export default App;
