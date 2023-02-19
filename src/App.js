import { useState } from "react";
import "./assets/App.css";
import AdminPage from "./pages/AdminPage/AdminPage";
import Login from "./pages/Login/Login.jsx";
import Thank from "./pages/ThankYouPage/ThankYouPage";
import Voting from "./pages/Voting/Voting.jsx";

function App() {
  const [screen, setScreen] = useState("login");
  const [currentUser, setCurrentUser] = useState({});
  const [userType, setUserType] = useState("");
  return (
    <div className="App">
      {(() => {
        switch (screen) {
          case "login":
            return (
              <Login
                setScreen={setScreen}
                setCurrentUser={setCurrentUser}
                setUserType={setUserType}
              />
            );
          case "voting":
            if (userType === "admin") {
              return (
                <AdminPage
                  setScreen={setScreen}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  setUserType={setUserType}
                  screen={screen}
                />
              );
            } else if (userType === "user") {
              return (
                <Voting
                  setScreen={setScreen}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  setUserType={setUserType}
                />
              );
            } else {
              return <></>;
            }
          case "voted":
            if (userType === "admin") {
              return (
                <AdminPage
                  setScreen={setScreen}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  setUserType={setUserType}
                  screen={screen}
                />
              );
            } else if (userType === "user") {
              return (
                <Thank
                  setScreen={setScreen}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  setUserType={setUserType}
                />
              );
            } else {
              return <></>;
            }

          default:
            <Login
              setScreen={setScreen}
              setCurrentUser={setCurrentUser}
              setUserType={setUserType}
            />;
            break;
        }
      })()}
    </div>
  );
}

export default App;
