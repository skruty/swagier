const express = require('express');
const router = express.Router();
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// Rejestracja użytkownika
router.post('/register', async (req, res) => {
    const { phone, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hashowanie hasła
        let user = new User({
            phone,
            password: hashedPassword
        });
        await user.save();
        res.send('User registered');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Logowanie użytkownika
router.post('/login', async (req, res) => {
    const { phone, password } = req.body;
    try {
        let user = await User.findOne({ where: { phone } });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            'secret', // Użyj zmiennej środowiskowej dla tajemnicy JWT
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Przykładowy zabezpieczony endpoint
router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
