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
    },
    image: {
        type: String,
        required: false, // set to true if an image is mandatory
        default: "images/drivers/Max Verstappen.jpg" // Optional default image if none is provided
    }

    })

const Driver = mongoose.model("Driver", driverSchema);
export default Driver;