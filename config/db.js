const mongoose = require('mongoose');

// Obtén la cadena de conexión desde la variable de entorno
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Conectado a MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error conectando a MongoDB Atlas:', error);
    });