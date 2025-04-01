import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Driver from "../models/drivers.js";

mongoose.connect(process.env.MONGODB_URI);



mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

export default mongoose.connection;