import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import registerRouter from "./routes/Register.js";
import loginRouter from "./routes/Login.js";
import cors from "cors";
import treesRouter from "./routes/Trees.js";
import path from "path";

const PORT = process.env.PORT || 5000;

const App = express();

App.use(express.json());

App.use(cors());

App.use("/register", registerRouter);

App.use("/login", loginRouter);

App.use("/trees", treesRouter);

if (process.env.NODE_ENV === "production") {
    App.use(express.static("../client/build"));
    App.get("/*", (request, response) => {
        response.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}

// eslint-disable-next-line no-console
mongoose.connect(
    process.env.DB_CONNECTION,
    console.log(`Connected on ${PORT}`),
);

App.listen(PORT);
