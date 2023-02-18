import users from "../../data/users.js";

function inputHandler(event, userInfo, SetUserInfo) {
  SetUserInfo({
    ...userInfo,
    ...{ [event.target.id]: event.target.value },
  });
}

function checkUser(event, userInfo) {
  // event.preventDefault();
  const isUser = users.filter((el) => {
    return el.name === userInfo.username && el.password === userInfo.password;
  });
  return isUser;
}

export { checkUser, inputHandler };
