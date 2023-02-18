import votes from "../../data/votes";

function addVote(name, setVoted, setMyVote) {
  setMyVote(name);
  setVoted(true);
  votes.forEach((el) => {
    if (el.id === name) {
      el.votes += 1;
    }
  });
}

function removeVote(myVote, setVoted, setMyVote) {
  setVoted(false);
  votes.forEach((el) => {
    if (el.id === myVote) {
      el.votes -= 1;
    }
  });
  setMyVote("");
}

export { addVote, removeVote };
