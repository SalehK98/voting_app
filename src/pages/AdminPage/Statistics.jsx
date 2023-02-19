import React, { useState } from "react";
import Button from "../../components/Button/Button";
import PartyCard from "./PartyCard";
import votes from "../../data/votes";
import VotesTable from "./VotesTable";

function Statistics({ setScreen, setCurrentUser, setUserType }) {
  const [partyDiv, setPartyDiv] = useState("board");
  const [usersDiv, setUsersDiv] = useState("table");
  return (
    <div>
      <h1>statistics</h1>
      <h2>parties</h2>
      <Button
        text="board"
        onClick={() => {
          setPartyDiv("board");
        }}
      />
      <Button
        text="chart"
        onClick={() => {
          setPartyDiv("chart");
        }}
      />
      {partyDiv === "board" ? (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {votes.map((el) => {
            return (
              <PartyCard
                partyName={el.name}
                votes={el.votes}
                key={el.id + el.votes}
              />
            );
          })}
        </div>
      ) : partyDiv === "chart" ? (
        <p>chart is coming soon</p>
      ) : (
        <></>
      )}

      <hr width="90%" />
      <div>
        <h2>Users</h2>
        <Button
          text="table"
          onClick={() => {
            setUsersDiv("table");
          }}
        />
        <Button
          text="chart"
          onClick={() => {
            setUsersDiv("chart");
          }}
        />
        {usersDiv === "table" ? (
          <VotesTable />
        ) : usersDiv === "chart" ? (
          <p>chart is coming soon</p>
        ) : (
          <></>
        )}
      </div>
      <br />
      <hr width="360" />
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

export default Statistics;
