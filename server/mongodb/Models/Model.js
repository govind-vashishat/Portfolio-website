import mongoose from "mongoose";

const viewer = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
}) 

const viewerScheme = mongoose.model("Viewers", viewer);

export default viewerScheme;