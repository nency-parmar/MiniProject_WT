const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    id:
    {
        type: Number,
        require: true,
    },
    name: 
    {
        type: String,
        required: true,
    },
    email: 
    {
        type: String,
        required: true,
    },
    destination: 
    {
        type: String,
        required: true,
    },
    date: 
    {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Booking', bookingSchema);