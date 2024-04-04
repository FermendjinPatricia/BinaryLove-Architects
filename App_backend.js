const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectare la baza de date MongoDB
mongoose.connect('mongodb://localhost:27017/login_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Eroare la conectarea cu MongoDB:'));
db.once('open', () => console.log('Conectat la baza de date MongoDB'));

// Definirea modelului utilizator
const User = mongoose.model('User', {
  username: String,
  password: String,
});

// Middleware pentru a permite analiza corpului cererii
app.use(bodyParser.json());

// Ruta pentru înregistrare
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send('Utilizator înregistrat cu succes.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Eroare la înregistrare.');
  }
});

// Ruta pentru autentificare
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).send('Autentificare reușită.');
    } else {
      res.status(401).send('Nume utilizator sau parolă incorectă.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Eroare la autentificare.');
  }
});

// Pornirea serverului
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
