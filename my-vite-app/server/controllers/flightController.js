const Flight = require('../models/flightModel');

// Get all flights based on search criteria
const getFlights = async (req, res) => {
  try {
    const { origin, destination, departureDate } = req.query;
    const flights = await Flight.find({ origin, destination, departureDate });
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flights', error });
  }
};

module.exports = { getFlights };
