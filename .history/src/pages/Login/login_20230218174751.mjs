import users from "../../data/users.js";

function checkUser(event, userInfo) {
  event.preventDefault();
  const isUser = users.filter((el) => {
    return el.name === username && el.password === password;
  });
  return isUser;
}

function inputHandler(event, userInfo, SetUserInfo) {
  SetUserInfo({
    ...userInfo,
    ...{ [event.target.id]: event.target.value },
  });
}

export { checkUser, inputHandler };