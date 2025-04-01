import "./db/connections.js"
import Driver from "../models/drivers.js"


const seedDrivers = async () => {
    const drivers = [
        { "name": "Max Verstappen", "age": 26, "nationality": "Dutch"},
        { "name": "Lewis Hamilton", "age": 39, "nationality": "British" },
        { "name": "Charles Leclerc", "age": 27, "nationality": "Monegasque" },
        { "name": "Lando Norris", "age": 25, "nationality": "British" },
        { "name": "George Russell", "age": 26, "nationality": "British" },
        { "name": "Fernando Alonso", "age": 42, "nationality": "Spanish" },
        { "name": "Carlos Sainz", "age": 29, "nationality": "Spanish" },
        { "name": "Sergio Perez", "age": 34, "nationality": "Mexican" },
        { "name": "Oscar Piastri", "age": 23, "nationality": "Australian" },
        { "name": "Yuki Tsunoda", "age": 24, "nationality": "Japanese" }
    ]

    await Driver.create(drivers)

    console.log("Drivers Created")

    await db.close()
}

seedDrivers()
