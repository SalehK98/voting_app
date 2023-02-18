import users from "../../data/users";

function Login(username, password) {
  //   const isUser = false;
  const isUser = users.forEach((el) => {
    return el.name === username && el.password === password;
  });
  return isUser;
}
