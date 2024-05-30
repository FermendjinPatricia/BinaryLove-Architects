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
    console.error('Server error:', err);
    res.status(500).json({ msg: 'Eroare de server', error: err.message });
  }
});

// Route pentru autentificarea unui utilizator
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Găsește utilizatorul în baza de date
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ msg: 'Utilizatorul nu există' });
    }

    // Verifică parola
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Parola este incorectă' });
    }

    res.json({ msg: 'Autentificare reușită', user });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ msg: 'Eroare de server', error: err.message });
  }
});

module.exports = router;
