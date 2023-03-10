import users from "../../data/users.js";
import { setType } from "../../utilities/utilities.js";

function inputHandler(event, userInfo, SetUserInfo, SetValidEmail = false) {
  if (event.target.id === "userEmail") {
    if (
      event.target.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      SetUserInfo({
        ...userInfo,
        ...{ [event.target.id]: event.target.value },
      });
      SetValidEmail("hidden");
    } else {
      SetValidEmail("visible");
    }
  } else if (event.target.id === "password") {
    SetUserInfo({
      ...userInfo,
      ...{ [event.target.id]: event.target.value },
    });
  }
}

function checkUser(
  event,
  userInfo,
  setMsgType,
  setScreen,
  setCurrentUser,
  setUserType
) {
  event.preventDefault();
  let isUser = false;
  if (userInfo.userEmail && userInfo.password) {
    const myUser = users.filter((el) => {
      return (
        el.email === userInfo.userEmail && el.password === userInfo.password
      );
    });
    if (myUser.length) {
      isUser = true;
      setCurrentUser(myUser);
      setType(setUserType, myUser);
      setScreen("voting");
    } else {
      isUser = "wrong info";
    }
  }
  setMsgType(isUser);
  return isUser;
}

export { checkUser, inputHandler };
