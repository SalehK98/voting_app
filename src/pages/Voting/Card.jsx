import React from "react";
import Button from "../../components/Button/Button";
import { addVote } from "./voting.js";

function Card({ name, votes, setVoted, voted, setMyVote }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>flag</p>
      <p>{votes}</p>
      <Button
        text="vote"
        onClick={() => {
          addVote(name, setVoted, setMyVote);
        }}
        disabled={voted}
      />
    </div>
  );
}

export default Card;
