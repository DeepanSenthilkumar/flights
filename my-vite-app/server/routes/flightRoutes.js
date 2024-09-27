// const express = require('express');
// const Flight = require('../models/flightModel');
// const router = express.Router();

// // Route to get all flights
// router.get('/', async (req, res) => {
//     try {
//         const flights = await Flight.find();
//         res.json(flights);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Route to create a new flight
// router.post('/', async (req, res) => {
//     const flight = new Flight({
//         flightName: req.body.flightName,
//         price: req.body.price,
//         itineraries: req.body.itineraries
//     });

//     try {
//         const newFlight = await flight.save();
//         res.status(201).json(newFlight);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// module.exports = router;

const express = require('express');
const { getFlights } = require('../controllers/flightController');
const router = express.Router();

// Route to search for flights
router.get('/flights', getFlights);

module.exports = router;
// Compare this snippet from my-vite-app/server/server.js:
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const flightRoutes = require('./routes/flightRoutes');
//