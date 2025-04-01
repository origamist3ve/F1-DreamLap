import mongoose from "mongoose";

const raceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
})

const Race = mongoose.model("Race", raceSchema);
export default Race;