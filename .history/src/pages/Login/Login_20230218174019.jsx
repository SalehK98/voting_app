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
            type="text"
            onInput={(event) => {
              inputHandler(event, userInfo, SetUserInfo);
            }}
          />
        </label>
        <label>
          Password{" "}
          <input
            type="password"
            onInput={(event) => {
              inputHandler(event, userInfo, SetUserInfo);
            }}
          />
        </label>
        <Button
          text="Login"
          onClick={(event) => {
            checkUser(event, "Tomas", "9YSLDWL");
          }}
        />
      </form>
    </>
  );
}

export default Login;
