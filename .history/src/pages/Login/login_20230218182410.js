import users from "../../data/users.js";

function inputHandler(event, userInfo, SetUserInfo) {
  SetUserInfo({
    ...userInfo,
    ...{ [event.target.id]: event.target.value },
  });
}

function checkUser(event, userInfo) {
  event.preventDefault();
  if (userInfo.username && userInfo.password) {
    const isUser = users.filter((el) => {
      return el.name === userInfo.username && el.password === userInfo.password;
    });
    return isUser;
  } else {
    console.log("empty user");
  }
}

export { checkUser, inputHandler };
