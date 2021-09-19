import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [theme, setTheme] = useState(
    localStorage.getItem("edtech-theme") === true ? true : false
  );
  useEffect(() => {
    console.log(theme);
    console.log(localStorage.getItem("edtech-theme"));
    if (theme) {
      document.documentElement.classList.remove("dark");
      setTheme(true);
    } else {
      document.documentElement.classList.add("dark");
      setTheme(false);
    }
  }, [theme]);
  return (
    <GlobalContext.Provider
      value={{
        user: [userData, setUserData],
        siteTheme: [theme, setTheme],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
