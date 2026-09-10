const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Booking = require('./Booking');
const cors = require('cors');
require('dotenv').config();

const connectionString = process.env.MONGODB_URI;

if (!connectionString) {
    console.error('MONGODB_URI is not configured. Add it to Backend/.env.');
    process.exit(1);
}

mongoose.connect(connectionString).then(() => {
    console.log("Connection Established With Cloud...");
    const app = express();

    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE"
    }));
    // Get All
    app.get('/bookings', async (req, res) => {
        try {
            const data = await Booking.find();
            res.send(data);
        } catch (error) {
            console.error('Error loading bookings:', error);
            res.status(500).json({ error: 'Could not load bookings' });
        }
    })
    // Get By Id

    app.get('/bookings/:id', async (req, res) => {
        try {
            const data = await Booking.findOne({ id: req.params.id });

            if (!data) {
                return res.status(404).send({ error: 'Booking not Found' });
            }
            res.send(data);
        } catch (error) {
            res.status(500).send({ error: 'Server Error' });
        }
    });

    // Create

    app.post('/bookings', async (req, res) => {
        try {
            const book = new Booking(req.body);
            const data = await book.save();
            res.send(data);
        } catch (error) {
            console.error('Error creating booking:', error);
            res.status(500).send({ error: 'Server Error' });
        }
    });

    // Delete

    app.delete('/bookings/:id', async (req, res) => {
        try {
            const data = await Booking.deleteOne({ id: req.params.id });

            if (data.deletedCount === 0) {
                return res.status(404).json({ error: 'Booking not Found' });
            }
            res.send({ message: 'Booking Deleted Successfully' });
        } catch (error) {
            res.status(500).send({ error: 'Server Error' });
        }
    });

    // Update
    app.put('/bookings/:id', async (req, res) => {
        try {
            const book = await Booking.findOneAndUpdate(
                { id: req.params.id },
                { $set: req.body },
                { new: true }
            );

            if (!book) {
                return res.status(404).json({ error: 'Booking Not Found' });
            }

            res.send(book);
        } catch (error) {
            res.status(500).json({ error: 'Server Error' });
        }
    });


    app.listen(8000, () => {
        console.log("Server Started on Port 8000...");
    })
}).catch((error) => {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
});