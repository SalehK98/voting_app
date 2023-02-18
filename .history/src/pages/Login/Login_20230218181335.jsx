import React from "react";
import Button from "../../components/Button/Button";
import { checkUser, inputHandler } from "./login.js";

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
            required
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
            required
          />
        </label>
        <Button
          text="Login"
          onClick={(event) => {
            console.log(checkUser(event, userInfo));
          }}
        />
      </form>
    </>
  );
}

export default Login;
