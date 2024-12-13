const express = require('express');
const passport = require('passport');
const User = require('../models/Usuario'); // Asegúrate de tener un modelo de usuario
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async(req, res) => {
    const { username, password } = req.body;

    // Verificar si ya existe un usuario con el mismo nombre de usuario
    const userExist = await User.findOne({ username });
    if (userExist) {
        return res.render('register', { message: 'El nombre de usuario ya existe' });
    }

    // Crear un nuevo usuario
    const newUser = new User({ username, password });
    await newUser.save();

    // Redirigir al login después de registrar
    res.redirect('/login');
});

module.exports = router;