import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: true,
    },
    fileSize: {
        type: Number,
        required: true,
    },
    fileType: {
        type: String,
    },
    downloadContent: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const File = mongoose.model("file", fileSchema);

export default File;
