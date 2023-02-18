import React from "react";
import Button from "../../components/Button/Button";

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
        <Button />
      </form>
    </>
  );
}

export default Login;
