import multer from "multer";

const max_size = 1024 * 1024 * 10;
const upload = multer({
    dest: "uploads",
});

export default upload;
