/* eslint-disable consistent-return */
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

// Register new user
const register = async (request, response) => {
    try {
        const email = request.body.email;
        const username = request.body.username;
        const password = request.body.password;
        const passwordVerify = request.body.passwordVerify;

        // Some conditions to register.

        if (!email || !username || !password || !passwordVerify) {
            return response.status(400).json({
                message: "Please enter all required fields.",
            });
        }

        if (username.length < 3) {
            return response.status(400).json({
                message: "Please enter an username of at least 3 characters.",
            });
        }

        if (password.length < 5) {
            return response.status(400).json({
                message: "Please enter a password of at least 5 characters.",
            });
        }

        if (password !== passwordVerify) {
            return response.status(400).json({
                message: "Please enter the same password twice.",
            });
        }

        const existingUser = await UserModel.findOne({UserEmail: email});
        if (existingUser) {
            return response.status(400).json({
                message: "An account with this email already exists.",
            });
        }

        // Encrypt the password

        const salt = await bcrypt.genSalt();
        const passwordHashed = await bcrypt.hash(password, salt);

        const NewUser = new UserModel({
            UserEmail: email,
            UserName: username,
            UserPasswordHash: passwordHashed,
        });
        const SavedUser = await NewUser.save();
        response.json(SavedUser);
    } catch (error) {
        response.status(500).send("Error 500 Check your terminal");
    }
};
export default register;
