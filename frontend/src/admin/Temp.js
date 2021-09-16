import React, { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";

const Temp = (props) => {
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = user;

  console.log(userData);

  return <div>Temp.js</div>;
};

export default Temp;
