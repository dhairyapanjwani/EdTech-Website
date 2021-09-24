import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated =
    localStorage.getItem("edtech-user") &&
    Object.keys(JSON.parse(localStorage.getItem("edtech-user"))).length !== 0
      ? true
      : false;
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
