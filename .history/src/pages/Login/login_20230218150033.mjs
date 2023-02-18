import users from "../../data/users";

function login(username, password) {
  //   const isUser = false;
  const isUser = users.forEach((el) => {
    return el.name === username && el.password === password;
  });
  return isUser;
}

console.log(login("Tomas", "9YSLDWL"));
