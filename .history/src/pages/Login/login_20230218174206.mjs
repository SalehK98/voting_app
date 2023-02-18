import users from "../../data/users.js";

function checkUser(event, username, password) {
  event.preventDefault();
  // console.log(users);
  //   const isUser = false;
  const isUser = users.filter((el) => {
    return el.name === username && el.password === password;
  });
  console.log("user", isUser);
  return isUser;
}

function inputHandler(event, userInfo, SetUserInfo) {
  console.log(event);
  // SetUserInfo({
  //   ...userInfo,
  //   ...{ [event.target]: event.target.value },
  // });
}

export { checkUser, inputHandler };
