const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('./User');

// Route pentru înregistrarea unui utilizator
router.post('/register', async (req, res) => {
  const { username, password, isOrganizer } = req.body;

  try {
    // Verifică dacă utilizatorul există deja în baza de date
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ msg: 'Utilizatorul există deja' });
    }

    // Creează un nou utilizator
    user = new User({
      username,
      password,
      isOrganizer
    });

    // Criptează parola
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Salvează utilizatorul în baza de date
    await user.save();

    res.json({ msg: 'Utilizator înregistrat cu succes' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Eroare de server');
  }
});

module.exports = router;
