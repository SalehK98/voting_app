import React from "react";
import Button from "../../components/Button/Button";
import { checkUser, inputHandler } from "./login.mjs";

function Login() {
  const [userInfo, SetUserInfo] = React.useState({});
  return (
    <>
      <h1>Login</h1>
      <form>
        <label>
          Username{" "}
          <input
            id="username"
            type="text"
            onInput={(event) => {
              inputHandler(event, userInfo, SetUserInfo);
            }}
          />
        </label>
        <label>
          Password{" "}
          <input
            id="password"
            type="password"
            onInput={(event) => {
              inputHandler(event, userInfo, SetUserInfo);
            }}
          />
        </label>
        <Button
          text="Login"
          onClick={(event) => {
            checkUser(event, userInfo);
          }}
        />
      </form>
    </>
  );
}

export default Login;
