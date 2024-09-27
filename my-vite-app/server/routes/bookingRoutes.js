const express = require('express');
const { createBooking, getUserBookings } = require('../controllers/bookingController');

const router = express.Router();

// Route to create a booking
router.post('/booking', createBooking);

// Route to get bookings for a specific user
router.get('/bookings/:userId', getUserBookings);

module.exports = router;
