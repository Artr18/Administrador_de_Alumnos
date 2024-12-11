const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://er663699:uATEDqDy5yKFCsMd@cluster0.alhgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch((error) => {
        console.error('Error conectando a MongoDB:', error);
    });