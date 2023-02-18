import React from "react";
import Button from "../../components/Button/Button";
import { checkUser, inputHandler } from "./login.js";
import LoginCard from "./LoginCard";

function Login() {
  const [userInfo, SetUserInfo] = React.useState({});
  return (
    <>
      <h1>Login</h1>
      <LoginCard />
    </>
  );
}

export default Login;
