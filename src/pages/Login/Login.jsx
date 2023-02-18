import React from "react";
import LoginCard from "./LoginCard";

function Login({ setScreen, setCurrentUser }) {
  const [msgType, setMsgType] = React.useState(true);

  return (
    <>
      <h1>Login</h1>
      <LoginCard
        setMsgType={setMsgType}
        setScreen={setScreen}
        setCurrentUser={setCurrentUser}
      />
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
