import React from "react";

function LoginCard() {
  return (
    <>
      <form>
        <label>
          Username{" "}
          <input
            id="username"
            type="text"
            onInput={(event) => {
              inputHandler(event, userInfo, SetUserInfo);
            }}
          />
        </label>
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
            console.log(checkUser(event, userInfo));
          }}
        />
      </form>
    </>
  );
}

export default LoginCard;
