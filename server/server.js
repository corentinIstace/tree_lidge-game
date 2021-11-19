import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import registerRouter from "./routes/Register.js";
import loginRouter from "./routes/Login.js";
import treesRouter from "./routes/Trees.js";

const App = express();

App.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
    );
    res.header("Content-Type", "application/json");
    next();
});

App.use(express.json());

App.use("/register", registerRouter);

App.use("/login", loginRouter);

App.use("/trees", treesRouter);

// eslint-disable-next-line no-console
mongoose.connect(process.env.DB_CONNECTION, () => console.log("Connected"));

App.listen(5000);
