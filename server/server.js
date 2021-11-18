import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import registerRouter from "./routes/Register.js";
import loginRouter from "./routes/Login.js";

const App = express();

App.use(express.json());

App.use("/register", registerRouter);

App.use("/login", loginRouter);

// eslint-disable-next-line no-console
mongoose.connect(process.env.DB_CONNECTION, () => console.log("Connected"));

App.listen(5000);
