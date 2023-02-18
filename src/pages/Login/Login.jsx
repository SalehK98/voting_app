import React from "react";
import LoginCard from "./LoginCard";

function Login({ setScreen }) {
  const [msgType, setMsgType] = React.useState(true);

  return (
    <>
      <h1>Login</h1>
      <LoginCard setMsgType={setMsgType} setScreen={setScreen} />
      {msgType === true ? (
        <p></p>
      ) : msgType === false ? (
        <p style={{ color: "#871B20" }}>Please fill Email and password</p>
      ) : (
        <p style={{ color: "#871B20" }}>Incorrect email or password</p>
      )}
    </>
  );
}

export default Login;
