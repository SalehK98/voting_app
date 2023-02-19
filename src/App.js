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
            console.log("i have arrived");
            if (userType === "admin") {
              return (
                <AdminPage
                  setScreen={setScreen}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  setUserType={setUserType}
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
            return (
              <Thank
                setScreen={setScreen}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                setUserType={setUserType}
              />
            );

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
