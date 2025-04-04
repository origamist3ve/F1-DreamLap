import express from "express";
import Team from "../models/teams.js"
import Driver from "../models/drivers.js"
import Race from "../models/races.js"
import User from "../models/user.js"
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
    const user = await User.findById(req.session.user);
    res.render("dashboard/new.ejs", { drivers, races, user });
})




router.get('/driver/:id', isSignedIn, async(req, res) => {
    const id = req.params.id;
    const user = await User.findById(req.session.user);
    const drivers = await Driver.findById(id)

    res.render("dashboard/showDriver.ejs", {
        drivers,
        user:user
    })
})

router.get('/race/:id', isSignedIn, async(req, res) => {
    const id = req.params.id;
    const races = await Race.findById(id)
    const user = await User.findById(req.session.user);


    res.render("dashboard/showRace.ejs", {
        races,
        user:user
    })
})

router.get("/team/:id", isSignedIn, async(req, res) => {
    const id = req.params.id;
    const user = await User.findById(req.session.user);
    const teams = await Team.findById(id).populate('drivers').populate('races');
    if (teams.user._id.toString() !== req.session.user._id) {
        return res.status(403).send("Unauthorized: You do not have permission to edit this team.");
    }

    res.render("dashboard/showTeam.ejs", {
        teams,
        user: user
    })
})

router.delete("/team/:id", isSignedIn, async(req, res) => {
    try {
        const id = req.params.id;
        await Team.findByIdAndDelete(id)
        const user = await User.findById(req.session.user);


        // teams.foreach((team, index) => {
        //     if (team._id.toString() === id) {
        //         team.splice(index, 1);
        //     }
        // })
        res.redirect("/dashboard");
    }
    catch(err) {
        console.log(err);
    }
})


router.get("/team/:id/edit", isSignedIn, async(req, res) => {
    try {
        const id = req.params.id;
        const team = await Team.findById(id).populate("drivers").populate("races");
        if (team.user._id.toString() !== req.session.user._id) {
            return res.status(403).send("Unauthorized: You do not have permission to edit this team.");
        }
        const drivers = await Driver.find({});
        const races = await Race.find({});
        const user = await User.findById(req.session.user);
        res.render("dashboard/edit.ejs", {
            team,
            drivers,
            races,
            user: user
        })

    }
    catch(err) {
        console.log(err);

    }
})

router.put("/team/:id", isSignedIn, async(req, res) => {
    const id = req.params.id;
    const {team, country, driver, race, engineSupplier} = req.body;

    const teams = await Team.findById(id)
    teams.set({
        name: team,
        engineSupplier: engineSupplier,
        country,
        drivers: driver,
        races: race,
    })
    await teams.save()
    res.redirect("/dashboard");
})





router.post("/",isSignedIn, async(req, res) => {
    const {name, country, driver,race, engineSupplier} = req.body;
    const user = await User.findById(req.session.user._id)
    console.log(user)

    const newTeam = new Team({
        name,
        country,
        drivers: driver,
        user: req.session.user,
        races: race,
        engineSupplier: engineSupplier,
    })
    await newTeam.save();
    res.redirect('/dashboard');
})



export default router;