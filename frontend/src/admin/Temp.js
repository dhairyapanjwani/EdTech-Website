import React, { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";

const Temp = (props) => {
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = user;

  console.log(userData);

  return (
    <button className="bg-red-500 hover:bg-red-700 p-3">
      Hover me
    </button>
  );
};

export default Temp;
