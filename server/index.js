import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";

import cors from "cors";
import connectDB from "./db/database.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

const allowedOrigins = [
    "https://file-sharing-app-su3e.onrender.com", //render hosted
    "https://file-sharing-henna.vercel.app", //vercel hosted
    "https://file-sharing-git-main-abhinavs-projects-082456e3.vercel.app", //vercel hosted
    "https://file-sharing-qacu0iah8-abhinavs-projects-082456e3.vercel.app", //vercel hosted
    "https://file-sharing-abhinavs-projects-082456e3.vercel.app", //vercel hosted
    "http://localhost:3000", //localhost
];

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowedOrigins.indexOf(req.header("Origin")) !== -1) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
        console.log(`Origin is allowed`);
    } else {
        corsOptions = { origin: false }; // disable CORS for this request
        console.log(`Origin is not allowed`);
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));
// app.use(cors());
connectDB();

// app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
    res.send("Backend Running...");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
