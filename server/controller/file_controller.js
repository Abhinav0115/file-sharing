import File from "../models/file_schema.js";

const max_size = 1024 * 1024 * 10;

export const uploadData = async (req, res) => {
    // console.log(req);
    const file = req.file;

    const fileObj = {
        path: req.file.path,
        fileName: req.file.originalname,
        fileSize: req.file.size,
        fileType: req.file.mimetype,
    };

    if (!file) {
        return res.status(400).json({
            success: false,
            message: "Please upload a file",
        });
    }
    if (file.size > max_size) {
        return res.status(400).json({
            success: false,
            message: "File size should be less than 10MB",
        });
    }

    try {
        const file = await File.create(fileObj);
        // console.log("file -->", file);
        res.status(200).json({
            path: `https://file-sharing-app-server-mplp.onrender.com/file/${file._id}`,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }

    // return res.status(200).json({
    //     success: true,
    //     message: "File uploaded successfully",
    //     data: file,
    // });
};

export const DownloadData = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);

        file.downloadContent++;

        await file.save();

        res.download(file.path, file.fileName, (err) => {
            if (err) {
                console.error(err);
            }

            console.log("File downloaded successfully");
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};
