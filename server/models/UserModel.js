import mongoose from "mongoose";

const UserModel = mongoose.Schema({
    UserEmail: {
        type: String,
        required: true,
    },
    UserName: {
        type: String,
    },
    UserPasswordHash: {
        type: String,
        required: true,
    },
});

export default mongoose.model("users", UserModel);
