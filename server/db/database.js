import mongoose from "mongoose";
const connectDB = async () => {
    mongoose.set("strictQuery", true);

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "file_sharing",
        });
        console.log("Database Connected");
    } catch (error) {
        console.log(error.messgae);
        console.log("error with database connection");
        throw new Error(
            "Please define the MONGODB_URI environment variable inside .env"
        );
    }
};

export default connectDB;
