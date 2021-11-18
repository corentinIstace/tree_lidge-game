import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Logpage from "./containers/Logpage.js";
import Homepage from "./containers/Homepage.js";
import Gamepage from "./containers/Gamepage.js";
import UserPage from "./containers/UserPage.js";
import NotFound from "./components/NotFound.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} exact element={<Logpage />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
                <Route path={"/gamepage"} element={<Gamepage />} />
                <Route path={"/homepage"} element={<Homepage />} />
                <Route path={"/userpage"} element={<UserPage />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
