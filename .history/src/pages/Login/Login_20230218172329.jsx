import React from "react";
import Button from "../../components/Button/Button";
import login from "./login.mjs";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label>
          Username <input type="text" />
        </label>
        <label>
          Password <input type="password" />
        </label>
        {/* <input type="submit" /> */}
        <Button
          text="Login"
          // onClick={() => {
          //   login("Tomas", "9YSLDWL");
          // }}
        />
      </form>
    </>
  );
}

export default Login;
