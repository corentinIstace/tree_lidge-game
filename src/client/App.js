import React from "react";
import Logpage from "../containers/Logpage";
import Homepage from "../containers/Homepage";
import Gamepage from "../containers/Gamepage";
import UserPage from "../containers/UserPage";
import Error from "./components/Error";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path={"/"} exact element={<Logpage />} />
            <Route path={"/gamepage"} element={<Gamepage />} />
            <Route path={"/homepage"} element={<Homepage />} />
            <Route path={"/userpage"} element={<UserPage />} />
            <Route element={<Error />} />
        </Routes>
    );
}

export default App;
