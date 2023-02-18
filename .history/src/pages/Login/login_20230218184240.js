import users from "../../data/users.js";

function inputHandler(event, userInfo, SetUserInfo) {
  SetUserInfo({
    ...userInfo,
    ...{ [event.target.id]: event.target.value },
  });
}

function checkUser(event, userInfo) {
  event.preventDefault();
  let isUser = "empty";
  if (userInfo.username && userInfo.password) {
    const myUser = users.filter((el) => {
      return el.name === userInfo.username && el.password === userInfo.password;
    });
    if (myUser.length) {
      isUser = true;
    } else {
      isUser = "wrong info";
    }
  }
  return isUser;
}

export { checkUser, inputHandler };
