// import users from "../../data/users.js";
const user = require("../../data/users.js");

function login(username, password) {
  //   const isUser = false;
  const isUser = users.filter((el) => {
    return el.name === username && el.password === password;
  });
  return isUser;
}

console.log(login("Tomas", "9YSLDWL"));
