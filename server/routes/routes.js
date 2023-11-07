import express from "express";
import { uploadData, DownloadData } from "../controller/file_controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadData);
router.get("/file/:fileId", DownloadData);

export default router;
