import React from "react";
import Register from "./blocks/Register";
import SignIn from "./blocks/SignIn";
import "./style/login.scss";

const Login = () => {
  return (
      <div>
        <Register />
        <SignIn />
      </div>
  );
}

export default Login;