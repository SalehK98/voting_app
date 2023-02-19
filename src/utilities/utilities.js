function setType(setUserType, myUser) {
  if (myUser[0].type === "admin") {
    setUserType("admin");
  } else {
    setUserType("user");
  }
}

function checkUserType(currentUser) {}

export { setType };
