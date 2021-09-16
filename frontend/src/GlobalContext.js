import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [userData, setUserData] = useState({});
  return (
    <GlobalContext.Provider
      value={{
        user: [userData, setUserData],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
