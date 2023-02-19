import React from "react";
import Button from "../../components/Button/Button";

function Thank({ setScreen, currentUser, setCurrentUser, setUserType }) {
  return (
    <div>
      <div style={{ backgroundColor: "#22E81D" }}>
        <p>Success</p>
        <p>your vote was registered for {currentUser[0].vote} party</p>
      </div>
      <h1>Thanks for voting</h1>
      <Button
        text="Log out"
        onClick={() => {
          setScreen("login");
          setUserType("");
          setCurrentUser({});
        }}
      />
    </div>
  );
}

export default Thank;
