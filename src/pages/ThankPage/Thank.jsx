import React from "react";
import Button from "../../components/Button/Button";

function Thank({ setScreen, setCurrentUser }) {
  return (
    <div>
      <h1>Thanks for voting</h1>
      <Button
        text="Log out"
        onClick={() => {
          setScreen("login");
          setCurrentUser({});
        }}
      />
    </div>
  );
}

export default Thank;
