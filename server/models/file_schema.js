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
    expiresAfter: {
        type: Date,
        default: () => Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    },
});

const File = mongoose.model("file", fileSchema);

export default File;
