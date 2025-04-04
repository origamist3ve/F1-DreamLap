import mongoose from "mongoose";

const raceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false, // set to true if an image is mandatory
        default: "images/drivers/Max Verstappen.jpg" // Optional default image if none is provided
    }
})

const Race = mongoose.model("Race", raceSchema);
export default Race;