import React from "react";
import Game from "./components/gamepage";
import Logpage from "../containers/Logpage";
import UserPage from "../containers/UserPage";

function App() {
  return (
    <div className="App">
      <Game />
      <Logpage></Logpage>
      <UserPage></UserPage>
    </div>
  );
}

export default App;
