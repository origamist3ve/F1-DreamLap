import express from "express";
import Team from "../models/teams.js"
import Driver from "../models/drivers.js"
import Race from "../models/races.js"
import User from "../models/user.js"
import races from "../models/races.js";
import {isSignedIn} from "../middleware/isSignedIn.js";


const router = express.Router();

router.get("/", async(req, res) => {
    try{
        const teams = await Team.find().populate('drivers').populate('races') //TODO: Change to find by id as to populate user unique ID
        const user = await User.findById(req.session.user);
        // teams.drivers = driver
        // const drivers = [];
        // teams.forEach((team) => {
        //     drivers.push(team.drivers)
        // })
        // drivers.join()
        res.render("dashboard/index.ejs", {
            teams,
            user: req.session.user,
        });
    }
    catch(err){
        console.log(err);
    }
})

router.get("/new", async(req, res) => {
    const drivers = await Driver.find({});
    const races = await Race.find({});
    res.render("dashboard/new.ejs", { drivers, races });
})

router.post("/",isSignedIn, async(req, res) => {
    const {name, country, driver,race} = req.body;
    const user = await User.findById(req.session.user._id)
    console.log(user)

    const newTeam = new Team({
        name,
        country,
        drivers: driver,
        user: user,
        races: race,
    })
    await newTeam.save();
    res.redirect('/dashboard');
})



export default router;