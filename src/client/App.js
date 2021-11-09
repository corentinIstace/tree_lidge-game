import React from "react";
import Logpage from "../containers/Logpage";
import Homepage from "../containers/Homepage";
import Gamepage from "../containers/Gamepage";
import UserPage from "../containers/UserPage";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} exact element={<Logpage />} />
                <Route path={"/gamepage"} element={<Gamepage />} />
                <Route path={"/homepage"} element={<Homepage />} />
                <Route path={"/userpage"} element={<UserPage />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
