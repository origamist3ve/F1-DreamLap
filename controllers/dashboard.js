import express from "express";
import Team from "../models/teams.js"
import Driver from "../models/drivers.js"
import Race from "../models/races.js"
import User from "../models/user.js"
import races from "../models/races.js";
import {isSignedIn} from "../middleware/isSignedIn.js";


const router = express.Router();

router.get("/",isSignedIn, async(req, res) => {
    try{
        const teams = await Team.find({user: req.session.user}).populate('drivers').populate('races') //TODO: Change to find by id as to populate user unique ID
        const user = await User.findById(req.session.user);
        // teams.drivers = driver
        // const drivers = [];
        // teams.forEach((team) => {
        //     drivers.push(team.drivers)
        // })
        // drivers.join()
        res.render("dashboard/index.ejs", {
            teams,
            user: user,
        });
    }
    catch(err){
        console.log(err);
    }
})

router.get("/new", isSignedIn, async(req, res) => {
    const drivers = await Driver.find({});
    const races = await Race.find({});
    res.render("dashboard/new.ejs", { drivers, races });
})




router.get('/driver/:id', isSignedIn, async(req, res) => {
    const id = req.params.id;
    const drivers = await Driver.findById(id)

    res.render("dashboard/showDriver.ejs", {
        drivers
    })
})

// router.get('/race/:id', isSignedIn, async(req, res) => {
//     const id = req.params.id;
//     const drivers = await Race.findById(id)
//
//     res.render("dashboard/showDriver.ejs", {
//         drivers
//     })
// })





router.post("/",isSignedIn, async(req, res) => {
    const {name, country, driver,race} = req.body;
    const user = await User.findById(req.session.user._id)
    console.log(user)

    const newTeam = new Team({
        name,
        country,
        drivers: driver,
        user: req.session.user,
        races: race,
    })
    await newTeam.save();
    res.redirect('/dashboard');
})



export default router;