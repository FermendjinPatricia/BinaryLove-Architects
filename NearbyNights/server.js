const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./userRoutes');

const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.json());

const MONGODB_URI = 'mongodb+srv://DudumanAndrei:12345678910@nearbynights.yzzb8xb.mongodb.net/nearbynights';
mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
