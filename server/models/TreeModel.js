import mongoose from "mongoose";
import {ObjectId} from "mongodb";

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
    Owner_id: {
        type: ObjectId,
        required: false,
    },
});

export default mongoose.model("trees", TreeModel);
