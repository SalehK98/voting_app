import React from "react";
import Button from "../../components/Button/Button";

function AlreadyVoted({ setScreen, currentUser, setCurrentUser, setUserType }) {
  return (
    <div>
      <h1>
        You have already voted for this election for {currentUser[0].vote} party
      </h1>
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

export default AlreadyVoted;
