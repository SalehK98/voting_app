import votes from "../../data/votes";
import users from "../../data/users";

function addVote(name, setVoted, setMyVote, currentUser) {
  setMyVote(name);
  setVoted(true);
  const user = currentUser[0].name;
  votes.forEach((el) => {
    if (el.id === name) {
      el.votes += 1;
      el.voters.push(user);
    }
  });
  users.forEach((el) => {
    if (el.name === user) {
      // el.didVote = true;
      el.vote = name;
    }
  });
  console.log("votes", votes);
  console.log("users", users);
}

function removeVote(myVote, setVoted, setMyVote, currentUser) {
  setVoted(false);
  const user = currentUser[0].name;
  votes.forEach((el) => {
    if (el.id === myVote) {
      el.votes -= 1;
      el.voters.pop();
    }
  });
  users.forEach((el) => {
    if (el.name === user) {
      el.didVote = false;
      el.vote = "";
    }
  });
  setMyVote("");
  console.log("votes", votes);
  console.log("users", users);
}

export { addVote, removeVote };
