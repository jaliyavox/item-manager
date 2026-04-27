require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000'
}));
app.use(express.json());

// Routes
const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);

// Health check
app.get('/', (req, res) => res.send('API is running'));

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(process.env.PORT || 5000, () =>
            console.log(`Server running on port ${process.env.PORT || 5000}`)
        );
    })

    .catch(err => console.error(err));
