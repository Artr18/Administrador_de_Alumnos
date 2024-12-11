const express = require('express');
const Alumno = require('./models/Alumno');
const methodOverride = require('method-override');
const app = express();
require('./config/db'); // Conexión a la base de datos

// Configuración de EJS
app.set('view engine', 'ejs');

// Middleware para manejar JSON y datos de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Rutas
const alumnoControllers = require('./controllers/alumnoControllers');
app.use('/', alumnoControllers);

// Servir archivos estáticos (si tienes una carpeta 'public')
app.use(express.static(__dirname + '/public/'));

// Rutas específicas para añadir y modificar alumnos
app.get('/alumnos/nuevo', (req, res) => {
    res.render('nuevo');
});

app.get('/alumnos/modificar', async(req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.render('edit', { alumnos });
    } catch (error) {
        console.error('Error obteniendo alumnos:', error);
        res.status(500).json({ error: 'Error de servidor' });
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});