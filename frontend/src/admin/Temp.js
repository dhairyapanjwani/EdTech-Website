import React, { useContext, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { GlobalContext } from "../GlobalContext";
import Home from "./screens/home/Home";

const Temp = (props) => {
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = user;

  console.log(userData);

  return (
    <div className="bg-gray-50 dark:bg-gray-800" >
      <Navbar/>
      <Home/>
      
    </div>
  );
};

export default Temp;
