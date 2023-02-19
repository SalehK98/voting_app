import React from "react";
import Button from "../../components/Button/Button";
import Voting from "../Voting/Voting.jsx";

function AdminPage({ setScreen, currentUser, setCurrentUser, setUserType }) {
  return (
    <div>
      <Button text="statistics" />
      <Button text="vote" />
      if()
      <Voting
        setScreen={setScreen}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setUserType={setUserType}
      />
    </div>
  );
}

export default AdminPage;
