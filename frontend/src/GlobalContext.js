import { createContext, useEffect, useState } from "react";
import reactPng from "./assets/images/react.png";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [theme, setTheme] = useState(
    localStorage.getItem("edtech-theme") === true ? true : false
  );
  const [courseSelect, setCourseSelect] = useState({
    id: 1,
    name: "ReactJS",
    avatar: reactPng,
  });
  const [allCourses, setAllCourses] = useState([]);

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

  useEffect(() => {
    console.log(courseSelect);
  }, [courseSelect]);

  useEffect(() => {
    console.log(allCourses);
  }, [allCourses]);
  return (
    <GlobalContext.Provider
      value={{
        user: [userData, setUserData],
        siteTheme: [theme, setTheme],
        courseSelection: [courseSelect, setCourseSelect],
        courseAll: [allCourses, setAllCourses],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
