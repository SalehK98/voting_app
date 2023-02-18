import React from "react";
import Button from "../../components/Button/Button";
import users from "../../data/users";

function Login() {
  return (
    <>
      {console.log(users)}
      <h1>Login</h1>
      <form>
        <label>
          Username <input type="text" />
        </label>
        <label>
          Password <input type="password" />
        </label>
        {/* <input type="submit" /> */}
        <Button text="Login" />
      </form>
    </>
  );
}

export default Login;
