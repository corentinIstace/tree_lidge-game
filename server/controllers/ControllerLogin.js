/* eslint-disable consistent-return */
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

// Log in

const login = async (request, response) => {
    try {
        const email = request.body.email;
        const password = request.body.password;

        // Validation of the user

        if (!email || !password) {
            return response
                .status(400)
                .json({message: "Please enter all required fields."});
        }

        const existingUser = await UserModel.findOne({UserEmail: email});
        if (!existingUser) {
            return response
                .status(401)
                .json({message: "Wrong email or password :("});
        }
        if (existingUser) {
            return bcrypt.compare(
                password,
                existingUser.UserPasswordHash,
                (error, result) => {
                    if (result) {
                        return response.status(200).json({
                            message: "You are logged in !",
                        });
                    }
                    return response.status(401).json({
                        message: "Wrong email or password :(",
                    });
                },
            );
        }
    } catch (error) {
        response.json({message: "Check the terminal"});
    }
};

export default login;
