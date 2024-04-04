const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectare la baza de date MongoDB
mongoose.connect('mongodb://localhost:27017/register_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Eroare la conectarea cu MongoDB:'));
db.once('open', () => console.log('Conectat la baza de date MongoDB'));

// Definirea modelului utilizator
const User = mongoose.model('User', {
  username: String,
  email: String,
  birthdate: String,
  isOrganizer: Boolean,
});

// Middleware pentru a permite analiza corpului cererii
app.use(bodyParser.json());

// Ruta pentru înregistrare
app.post('/register', async (req, res) => {
  const { username, email, birthdate, isOrganizer } = req.body;
  try {
    const user = new User({ username, email, birthdate, isOrganizer });
    await user.save();
    res.status(201).send('Utilizator înregistrat cu succes.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Eroare la înregistrare.');
  }
});

// Pornirea serverului
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
