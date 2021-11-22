import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Logpage from "./containers/Logpage.js";
import Homepage from "./containers/Homepage.js";
import Gamepage from "./containers/Gamepage.js";
import UserPage from "./containers/UserPage.js";
import NotFound from "./components/NotFound.js";
import LeaderboardPage from "./containers/LeaderboardPage.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} exact element={<Logpage />} />
                <Route path={"/login"} element={<Logpage />} />
                <Route path={"/register"} element={<Logpage />} />
                <Route path={"/gamepage"} element={<Gamepage />} />
                <Route path={"/homepage"} element={<Homepage />} />
                <Route path={"/userpage"} element={<UserPage />} />
                <Route path={"/leaderboard"} element={<LeaderboardPage />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
