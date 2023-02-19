import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { filterUsers } from "./statistics";

function VotesTable() {
  const [filteredUsers, setFilteredUsers] = useState("all");
  return (
    <div>
      <Button
        text="all"
        onClick={() => {
          setFilteredUsers("all");
        }}
      />
      <Button
        text="did vote"
        onClick={() => {
          setFilteredUsers("voted");
        }}
      />
      <Button
        text="did not voted"
        onClick={() => {
          setFilteredUsers("did_not_vote");
        }}
      />
      <table style={{ alignContent: "center", margin: "auto" }}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>voted for</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers(filteredUsers).map((el) => {
            return (
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.type}</td>
                <td>{el.didVote ? el.vote : "did not vote"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default VotesTable;
