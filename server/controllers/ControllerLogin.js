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

        const existingUser = await UserModel.findOne({email});
        if (!existingUser)
            return response
                .status(401)
                .json({errorMessage: "Wrong email or password."});

        const passwordCorrect = await bcrypt.compare(
            password,
            existingUser.UserPasswordHash,
        );
        if (!passwordCorrect)
            return response
                .status(401)
                .json({errorMessage: "Wrong email or password."});

        response.json("You are logged in !");
    } catch (error) {
        console.error(error);
        response.status(500).send("Check the terminal");
    }
};

export default login;
