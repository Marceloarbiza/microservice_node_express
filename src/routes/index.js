// este archivo va a contener todas las rutas
const router = require('express').Router(); // Router de express

const helloRoute = require('./hello'); // traemos la ruta del archivo hello

router.use('/hello', helloRoute) // el endpoint /hello nos traerá el contenido del archivo ./hello

module.exports = router; 