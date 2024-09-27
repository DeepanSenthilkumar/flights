const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    flightId: { type: String, required: true },
    passengers: [
        {
            name: { type: String, required: true },
            age: { type: Number, required: true },
            seat: { type: String, required: true },
        }
    ],
    totalAmount: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
