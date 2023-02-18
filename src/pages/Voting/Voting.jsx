import React, { useState } from "react";
import Button from "../../components/Button/Button";
import votes from "../../data/votes";
import Card from "./Card";
import { removeVote } from "./voting.js";

function Voting({ setScreen, currentUser }) {
  const [voted, setVoted] = useState(false);
  const [myVote, setMyVote] = useState("");
  return (
    <div>
      <p>Hello {currentUser[0].name}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {votes.map((el) => {
          return (
            <Card
              name={el.name}
              votes={el.votes}
              setVoted={setVoted}
              voted={voted}
              setMyVote={setMyVote}
              key={el.id}
            />
          );
        })}
      </div>
      <br />
      {voted ? (
        <div>
          <Button
            text={"change vote"}
            onClick={() => {
              removeVote(myVote, setVoted, setMyVote);
              setVoted(false);
            }}
          />
          <span> </span>
          <Button
            text={"done"}
            onClick={() => {
              setScreen("voted");
            }}
          />
        </div>
      ) : (
        <>{console.log("check voted", voted)}</>
      )}
    </div>
  );
}

export default Voting;
