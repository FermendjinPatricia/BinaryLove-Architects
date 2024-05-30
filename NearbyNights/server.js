require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
const userRoutes = require('./userRoutes');

const app = express();
const PORT = process.env.PORT || 8082;

app.use(cors()); // Use the cors middleware
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://DudumanAndrei:12345678910@nearbynight.yzzb8xb.mongodb.net/nearbynight';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
