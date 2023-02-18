import React from "react";

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
        <input type="submit" />
      </form>
    </>
  );
}

export default Login;
