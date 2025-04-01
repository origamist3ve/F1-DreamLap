import express from "express";
import Team from "../models/teams.js"


const router = express.Router();

router.get("/", (req, res) => {
    res.render("dashboard/index.ejs");
})

router.get("/new", (req, res) => {
    res.render("dashboard/new.ejs");

})



export default router;