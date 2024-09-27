// const mongoose = require('mongoose');

// const FlightSchema = new mongoose.Schema({
//     flightName: {
//         type: String,
//         required: true
//     },
//     price: {
//         currency: { type: String, required: true },
//         total: { type: String, required: true }
//     },
//     itineraries: [
//         {
//             segments: [
//                 {
//                     carrierCode: { type: String, required: true },
//                     departure: {
//                         iataCode: { type: String, required: true },
//                         at: { type: Date, required: true }
//                     },
//                     arrival: {
//                         iataCode: { type: String, required: true },
//                         at: { type: Date, required: true }
//                     }
//                 }
//             ]
//         }
//     ]
// });

// module.exports = mongoose.model('Flight', FlightSchema);

const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  departureDate: { type: Date, required: true },
  price: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
// Compare this snippet from my-vite-app/server/controllers/userController.js:
// const User = require('../models/userModel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// 