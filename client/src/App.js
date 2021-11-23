import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Logpage from "./containers/Logpage.js";
import Homepage from "./containers/Homepage.js";
import Gamepage from "./containers/Gamepage.js";
import UserPage from "./containers/UserPage.js";
import NotFound from "./components/NotFound.js";
import LeaderboardPage from "./containers/LeaderboardPage.js";
import HerokuUrl from "./HerokuUrl.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={`${HerokuUrl}/`} exact element={<Logpage />} />
                <Route path={`${HerokuUrl}/login`} element={<Logpage />} />
                <Route path={`${HerokuUrl}/register`} element={<Logpage />} />
                <Route path={`${HerokuUrl}/gamepage`} element={<Gamepage />} />
                <Route path={`${HerokuUrl}/homepage`} element={<Homepage />} />
                <Route path={`${HerokuUrl}/userpage`} element={<UserPage />} />
                <Route
                    path={`${HerokuUrl}/leaderboard`}
                    element={<LeaderboardPage />}
                />
                <Route path={`${HerokuUrl}/*`} element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
