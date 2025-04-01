import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import methodOverride from "method-override";
import morgan from "morgan";
import session from "express-session";
import path from "path";

import "./db/connections.js"

// import autController from "./controllers/auth.js"
import {fileURLToPath} from "url";

const port = process.env.PORT ? process.env.PORT : '3000';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})