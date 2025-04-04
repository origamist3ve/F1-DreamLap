import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    engineSupplier: {
        type: String,
        enum:["Ferrari", "Honda", "Mercedes", "Red Bull", "Mercedes", "Renault", "Alpine","McLaren" ]
    },
    drivers: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Driver",
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: "User",
    },
    races: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Race",
    }]
})

const Team = mongoose.model("Team", TeamSchema);
export default Team;