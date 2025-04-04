import db from "../db/connections.js"
import Driver from "../models/drivers.js"
import Race from "../models/races.js"


const seedRaces = async () => {
    try {
        const f1Races = [
            {
                name: "Bahrain Grand Prix",
                location: "Sakhir, Bahrain",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Saudi Arabian Grand Prix",
                location: "Jeddah, Saudi Arabia",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Australian Grand Prix",
                location: "Melbourne, Australia",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Japanese Grand Prix",
                location: "Suzuka, Japan",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Chinese Grand Prix",
                location: "Shanghai, China",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Miami Grand Prix",
                location: "Miami, USA",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Emilia Romagna Grand Prix",
                location: "Imola, Italy",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Monaco Grand Prix",
                location: "Monte Carlo, Monaco",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Canadian Grand Prix",
                location: "Montreal, Canada",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Spanish Grand Prix",
                location: "Barcelona, Spain",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Austrian Grand Prix",
                location: "Spielberg, Austria",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "British Grand Prix",
                location: "Silverstone, United Kingdom",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Hungarian Grand Prix",
                location: "Budapest, Hungary",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Belgian Grand Prix",
                location: "Spa-Francorchamps, Belgium",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Dutch Grand Prix",
                location: "Zandvoort, Netherlands",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Italian Grand Prix",
                location: "Monza, Italy",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Singapore Grand Prix",
                location: "Singapore",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "United States Grand Prix",
                location: "Austin, USA",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Mexico City Grand Prix",
                location: "Mexico City, Mexico",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "São Paulo Grand Prix",
                location: "São Paulo, Brazil",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Las Vegas Grand Prix",
                location: "Las Vegas, USA",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Qatar Grand Prix",
                location: "Lusail, Qatar",
                image: "/images/races/sergio_perez.jpg"
            },
            {
                name: "Abu Dhabi Grand Prix",
                location: "Yas Island, Abu Dhabi",
                image: "/images/races/sergio_perez.jpg"
            }
        ];
        await Race.create(f1Races)

        await db.close()
    }
    catch (error) {
        console.error(error)
    }
}

seedRaces()