import React from "react";
import Logpage from "../containers/Logpage";
import Homepage from "../containers/Homepage";
import Gamepage from "../containers/Gamepage";
import UserPage from "../containers/UserPage";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <Routes>
            <div className={"App"}>
                <Route path={"/"} exact>
                    <Logpage />
                </Route>
                <Route path={"/gamepage"}>
                    <Gamepage />
                </Route>
                <Route>
                    <Homepage path={"/homepage"} />
                </Route>
                <Route>
                    <UserPage path={"/userpage"} />
                </Route>
            </div>
        </Routes>
    );
}

export default App;
