import User from "../models/user.js";
import bcrypt from "bcrypt";
import express from "express";


const router = express.Router();

//creates the routing for sign up, sign in, and sign out

router.get("/sign-up", (req, res) => {
    res.render("auth/sign-up.ejs", {user: {}});
})

router.get("/sign-in", (req, res) => {
    res.render("auth/sign-in.ejs", {user: {}});
})

router.get("/sign-out", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})

router.post("/sign-up", async(req, res) => {
    try{
        const userInDataBase = await User.findOne({username: req.body.username})
        if (userInDataBase) {
            return res.send("User already exists");
        }
        if(req.body.password !== req.body.confirmPassword) {
            return res.send("Passwords don't match");
        }

        const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
        req.body.password = hashedPassword;

        await User.create(req.body)

        res.redirect("/auth/sign-in");
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
})

router.post("/sign-in", async(req, res) => {
    try{
        const userInDataBase = await User.findOne({username: req.body.username})
        if (!userInDataBase) {
            return res.send("Login failed. Please try again");
        }

        const validPassword = bcrypt.compareSync (
            req.body.password,
            userInDataBase.password
        )
        if (!validPassword) {
            return res.send("Login failed. Please try again");
        }

        req.session.user = {
            username: userInDataBase.username,
            _id : userInDataBase._id
        }
        res.redirect("/");
    }
    catch(err){
        console.log(err);
        res.redirect("/");

    }
})

export default router;