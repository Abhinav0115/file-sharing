import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";

import cors from "cors";
import connectDB from "./db/database.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

const corsOptions = {
    origin: "https://file-sharing-app-su3e.onrender.com",
    // origin: "https://localhost:3000", //dev mode
};

app.use(cors(corsOptions));
// app.use(cors()); //dev mode
connectDB();

// app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
    res.send("Backend Running...");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
