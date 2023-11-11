import multer from "multer";

const max_size = 60 * 1024 * 1024;
const upload = multer({
    dest: "uploads",
});

export default upload;
