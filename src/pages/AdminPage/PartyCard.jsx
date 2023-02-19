import React from "react";

function PartyCard({ partyName, votes }) {
  return (
    <div>
      <h4>{partyName}</h4>
      <h4>flag</h4>
      <h4>{votes}</h4>
    </div>
  );
}

export default PartyCard;
