import React from "react";
import Homepage from "./components/homepage";
import Game from "./components/gamepage";
import Logpage from "../containers/Logpage";
import UserPage from "../containers/UserPage";

function App() {
    return (
        <div className={"App"}>
            <Homepage />
            <Game />
            <Logpage />
            <UserPage />
        </div>
    );
}

export default App;
