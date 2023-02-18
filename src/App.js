import { useState } from "react";
import "./assets/App.css";
import Login from "./pages/Login/Login.jsx";
import Thank from "./pages/ThankPage/Thank";
import Voting from "./pages/Voting/Voting.jsx";

function App() {
  const [screen, setScreen] = useState("login");
  const [currentUser, setCurrentUser] = useState({});
  return (
    <div className="App">
      {(() => {
        switch (screen) {
          case "login":
            return (
              <Login setScreen={setScreen} setCurrentUser={setCurrentUser} />
            );
          case "voting":
            return <Voting setScreen={setScreen} currentUser={currentUser} />;

          case "voted":
            return (
              <Thank setScreen={setScreen} setCurrentUser={setCurrentUser} />
            );

          default:
            <Login setScreen={setScreen} setCurrentUser={setCurrentUser} />;
            break;
        }
      })()}
    </div>
  );
}

export default App;
