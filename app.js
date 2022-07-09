const express = require('express');
const cors = require('cors'); // para hacer peticiones desde cualquier dominio
const path = require('path'); // sirve para encotnrar una ruta de un html

const router = require('./src/routes'); // importamos el index del router
const { json, urlencoded } = require('express');

const app = express(); // creamos la app

const port = process.env.PORT || 8080; // por defecto el puerto es el 8080 o puede recibirse por variable de entorno

app.use(json());
app.use(urlencoded({ extended: false }));

const corsOptions = {
    origin: '*', // todos pueden hacer reach a nuestro microservicio
    optionSuccessStatus: 200
}

app.use(cors(corsOptions)); // cualquier origen puede acceder a nuestro microservicio

app.use(router); // router de express

app.use('/home', (req, res) => {
    res.sendFile(path.join(__dirname+'/src/html/index.html'));
})

app.use('/', (req, res) => {
    res.end('Mi primer microservicio');
})

app.listen(port, () => {
    console.log(`La app se escucha en el puerto: ${port}`);
})

