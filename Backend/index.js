const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Booking = require('./Booking');
const cors = require('cors');

const connectionString = "mongodb+srv://Nancy:123123123@cluster0.lqxeh.mongodb.net/MiniProject";

mongoose.connect(connectionString).then(() => {
    console.log("Connection Established With Cloud...");
    const app = express();

    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use(cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE"
    }));
    // Get All
    app.get('/bookings',async(req,res) => {
        const data = await Booking.find();
        res.send(data);
    })
    // Get By Id

    app.get('/bookings/:id', async (req, res) => {
        try {
            const data = await Booking.findOne({id: req.params.id});
            
            if (!data) {
                return res.status(404).send({ error: 'Booking not Found' });
            }
            res.send(data);
        } catch (error) {
            res.status(500).send({ error: 'Server Error' });
        }
    });
    // app.get('/bookings/:id',async(req,res) => {
    //     const data = await Booking.findOne({id:req.params.id});
    //     if (!data) 
    //     {
    //         return res.status(404).send({ error: 'Booking not Found' });
    //     }
    //     res.send(data);
    // })

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
    
    // app.post('/bookings',async(req,res) => {
    //     console.log(req.body);
    //     const book = new Booking(req.body);
    //     const data = await book.save();
    //     res.send(data);
    // })

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
    // app.delete('/bookings/:id',async(req,res) => {
    //     const data = await Booking.deleteOne({id:req.params.id});
    //     if (data.deletedCount === 0) 
    //     {
    //         return res.json({ error: 'Booking not Found' });
    //     }
    //       res.send({ message: 'Booking Deleted Successfully' })
    // })

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
    

    app.listen(8000,()=>{
        console.log("Server Started on Port 8000...");
    })
})