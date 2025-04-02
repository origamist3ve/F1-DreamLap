import db from "../db/connections.js"
import Driver from "../models/drivers.js"
import Race from "../models/races.js"


const seedRaces = async () => {
    try {
        const f1Races = [
            { name: "Bahrain Grand Prix", location: "Sakhir, Bahrain" },
            { name: "Saudi Arabian Grand Prix", location: "Jeddah, Saudi Arabia" },
            { name: "Australian Grand Prix", location: "Melbourne, Australia" },
            { name: "Japanese Grand Prix", location: "Suzuka, Japan" },
            { name: "Chinese Grand Prix", location: "Shanghai, China" },
            { name: "Miami Grand Prix", location: "Miami, USA" },
            { name: "Emilia Romagna Grand Prix", location: "Imola, Italy" },
            { name: "Monaco Grand Prix", location: "Monte Carlo, Monaco" },
            { name: "Canadian Grand Prix", location: "Montreal, Canada" },
            { name: "Spanish Grand Prix", location: "Barcelona, Spain" },
            { name: "Austrian Grand Prix", location: "Spielberg, Austria" },
            { name: "British Grand Prix", location: "Silverstone, United Kingdom" },
            { name: "Hungarian Grand Prix", location: "Budapest, Hungary" },
            { name: "Belgian Grand Prix", location: "Spa-Francorchamps, Belgium" },
            { name: "Dutch Grand Prix", location: "Zandvoort, Netherlands" },
            { name: "Italian Grand Prix", location: "Monza, Italy" },
            { name: "Singapore Grand Prix", location: "Singapore" },
            { name: "United States Grand Prix", location: "Austin, USA" },
            { name: "Mexico City Grand Prix", location: "Mexico City, Mexico" },
            { name: "São Paulo Grand Prix", location: "São Paulo, Brazil" },
            { name: "Las Vegas Grand Prix", location: "Las Vegas, USA" },
            { name: "Qatar Grand Prix", location: "Lusail, Qatar" },
            { name: "Abu Dhabi Grand Prix", location: "Yas Island, Abu Dhabi" }
        ];
        await Race.create(f1Races)

        await db.close()
    }
    catch (error) {
        console.error(error)
    }
}

seedRaces()