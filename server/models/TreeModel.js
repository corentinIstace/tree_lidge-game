import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TreeModel = mongoose.Schema({
    Geoloc: {
        lat: {
            type: Number,
            required: true,
        },
        lon: {
            type: Number,
            required: true,
        },
    },
    Value: {
        type: Number,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    IsLocked: {
        type: Boolean,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: false,
    },
});

export default mongoose.model("tree", TreeModel, "trees");
