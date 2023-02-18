import React from "react";
import { checkUser, inputHandler } from "./login.js";
import Button from "../../components/Button/Button";

function LoginCard({ setMsgType, setScreen, setCurrentUser }) {
  const [userInfo, SetUserInfo] = React.useState({});
  const [validEmail, SetValidEmail] = React.useState("hidden");

  return (
    <>
      <form>
        <label>
          Email{" "}
          <input
            id="userEmail"
            type="text"
            onInput={(event) => {
              inputHandler(event, userInfo, SetUserInfo, SetValidEmail);
            }}
          />
        </label>
        <p style={{ color: "#871B20", visibility: validEmail }}>
          PLease enter a valid email address
        </p>
        <label>
          Password{" "}
          <input
            id="password"
            type="password"
            onInput={(event) => {
              inputHandler(event, userInfo, SetUserInfo);
            }}
          />
        </label>
        <Button
          text="Login"
          onClick={(event) => {
            checkUser(event, userInfo, setMsgType, setScreen, setCurrentUser);
          }}
        />
      </form>
    </>
  );
}

export default LoginCard;
