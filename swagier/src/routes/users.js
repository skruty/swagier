const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Example: Register User
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = new User({
            name,
            email,
            password
        });
        await user.save();
        res.send('User registered');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
