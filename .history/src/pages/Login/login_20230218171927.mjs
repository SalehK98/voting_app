import users from "../../data/users.js";

function login(username, password) {
  // console.log(users);
  //   const isUser = false;
  const isUser = users.filter((el) => {
    return el.name === username && el.password === password;
  });
  return isUser;
}

console.log(login("Tomas", "9YSLDWL"));
