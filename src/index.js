import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>,
    document.querySelector("#root"),
);
reportWebVitals();
