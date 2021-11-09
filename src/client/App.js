import React from "react";
import Logpage from "../containers/Logpage";
import Homepage from "../containers/Homepage";
import Gamepage from "../containers/Gamepage";
import UserPage from "../containers/UserPage";

function App() {
    return (
        <div className={"App"}>
            <Homepage />
            <Gamepage />
            <Logpage />
            <UserPage />
        </div>
    );
}

export default App;
