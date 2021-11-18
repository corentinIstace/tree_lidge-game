import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

// Log in

const login = async (request, response) => {
    try {
        const email = request.body.email;
        const password = request.body.password;

        // Validation of the user

        if (!email || !password)
            return response
                .status(400)
                .json({errorMessage: "Please enter all required fields."});

        const existingUser = await UserModel.findOne({UserEmail: email});

        if (existingUser)
            return bcrypt.compare(
                password,
                existingUser.UserPasswordHash,
                (error, result) => {
                    if (result) {
                        return response.json("You are logged in !");
                    } else {
                        return response
                            .status(401)
                            .json("Wrong email or password :(");
                    }
                },
            );
    } catch (error) {
        console.error(error);
        response.status(500).send("Check the terminal");
    }
};

export default login;
