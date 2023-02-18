import users from "../../data/users";

function Login(username, password) {
  //   const isUser = false;
  users.forEach((el) => {
    return el.name === username && el.password === password;
  });
}
