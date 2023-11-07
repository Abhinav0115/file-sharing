import mongoose from "mongoose";
let isConected = false;
const connectDB = async () => {
    mongoose.set("strictQuery", true);
    if (isConected) {
        console.log("Database already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "file_sharing",
        });
        isConected = true;
        console.log("Database Connected");
    } catch (error) {
        console.log(error.messgae);
        console.log("error with database connection");
        throw new Error(
            "Please define the MONGO_URI environment variable inside .env"
        );
    }
};

export default connectDB;
