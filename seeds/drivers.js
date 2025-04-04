import db from "../db/connections.js";
import Driver from "../models/drivers.js";


const seedDrivers = async () => {
    try {
        const drivers = [
            {
                name: "Max Verstappen",
                age: 26,
                nationality: "Dutch",
                image: "images/drivers/Max Verstappen.jpg"
            },
            {
                name: "Lewis Hamilton",
                age: 39,
                nationality: "British",
                image: "/images/drivers/lewis_hamilton.jpg"
            },
            {
                name: "Charles Leclerc",
                age: 27,
                nationality: "Monegasque",
                image: "/images/drivers/charles_leclerc.jpg"
            },
            {
                name: "Lando Norris",
                age: 25,
                nationality: "British",
                image: "/images/drivers/lando_norris.jpg"
            },
            {
                name: "George Russell",
                age: 26,
                nationality: "British",
                image: "/images/drivers/george_russell.jpg"
            },
            {
                name: "Fernando Alonso",
                age: 42,
                nationality: "Spanish",
                image: "/images/drivers/fernando_alonso.jpg"
            },
            {
                name: "Carlos Sainz",
                age: 29,
                nationality: "Spanish",
                image: "/images/drivers/carlos_sainz.jpg"
            },
            {
                name: "Sergio Perez",
                age: 34,
                nationality: "Mexican",
                image: "/images/drivers/sergio_perez.jpg"
            },
            {
                name: "Oscar Piastri",
                age: 23,
                nationality: "Australian",
                image: "/images/drivers/oscar_piastri.jpg"
            },
            {
                name: "Yuki Tsunoda",
                age: 24,
                nationality: "Japanese",
                image: "/images/drivers/yuki_tsunoda.jpg"
            }
        ];

        await Driver.create(drivers);
        console.log("Drivers Created");
        await db.close();
    } catch (err) {
        console.error(err);
        console.log("There was an error");
    }
};

seedDrivers();
