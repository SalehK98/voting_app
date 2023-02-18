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
          Username <input type="text" onInput={inputHandle} />
        </label>
        <label>
          Password <input type="password" onInput={inputHandler} />
        </label>
        <Button
          text="Login"
          onClick={(event) => {
            login(event, "Tomas", "9YSLDWL");
          }}
        />
      </form>
    </>
  );
}

export default Login;
