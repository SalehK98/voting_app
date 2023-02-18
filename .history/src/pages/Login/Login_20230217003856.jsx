import React from "react";

function Login() {
  return (
    <form>
      <label>
        Username <input type="text" />
      </label>
      <label>
        Password <input type="password" />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Login;
