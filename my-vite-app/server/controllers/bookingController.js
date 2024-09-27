const Booking = require('../models/bookingModel');

// Create a booking
const createBooking = async (req, res) => {
    try {
        const { userId, flightId, passengers, totalAmount } = req.body;

        // Create new booking document
        const newBooking = new Booking({
            userId,
            flightId,
            passengers,
            totalAmount,
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking successful', booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: 'Booking failed', error });
    }
};

// Get user bookings
const getUserBookings = async (req, res) => {
    try {
        const { userId } = req.params;
        const bookings = await Booking.find({ userId });

        if (!bookings.length) {
            return res.status(404).json({ message: 'No bookings found' });
        }

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve bookings', error });
    }
};

module.exports = {
    createBooking,
    getUserBookings,
};
