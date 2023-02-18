import { useState } from "react";
import "./assets/App.css";
import Login from "./pages/Login/Login.jsx";
import Voting from "./pages/Voting/Voting";

function App() {
  const [screen, setScreen] = useState("login");
  return (
    <div className="App">
      {(() => {
        switch (screen) {
          case "login":
            return <Login setScreen={setScreen} />;
          case "voting":
            return <Voting setScreen={setScreen} />;
        }
      })()}
    </div>
  );
}

export default App;
