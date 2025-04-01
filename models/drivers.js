import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    }
})

const Driver = mongoose.model("Driver", driverSchema);
export default Driver;