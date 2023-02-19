import users from "../../data/users";

function filterUsers(filterBase) {
  if (filterBase === "all") {
    return users;
  } else if (filterBase === "voted") {
    const filteredUsers = users.filter((el) => el.didVote === true);
    return filteredUsers;
  } else if (filterBase === "did_not_vote") {
    const filteredUsers = users.filter((el) => el.didVote === false);
    return filteredUsers;
  } else {
    return users;
  }
}

export { filterUsers };
