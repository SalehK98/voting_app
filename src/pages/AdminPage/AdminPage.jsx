import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Thank from "../ThankYouPage/ThankYouPage";
import Voting from "../Voting/Voting.jsx";
import Statistics from "./Statistics.jsx";

function AdminPage({
  setScreen,
  currentUser,
  setCurrentUser,
  setUserType,
  screen,
}) {
  const [page, setPage] = useState("vote");

  return (
    <div>
      <Button
        text="statistics"
        onClick={() => {
          setPage("statistics");
        }}
      />
      <Button
        text="vote"
        onClick={() => {
          setPage("vote");
        }}
      />
      {page === "vote" ? (
        <>
          {(() => {
            if (screen === "voting") {
              return (
                <Voting
                  setScreen={setScreen}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  setUserType={setUserType}
                />
              );
            } else if (screen === "voted") {
              return (
                <Thank
                  setScreen={setScreen}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  setUserType={setUserType}
                />
              );
            }
          })()}
        </>
      ) : (
        <Statistics
          setScreen={setScreen}
          setCurrentUser={setCurrentUser}
          setUserType={setUserType}
        />
      )}
    </div>
  );
}

export default AdminPage;
