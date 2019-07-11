//importar express
const express = require('express');

//configuracion express
const app = express();
app.use('/', (req, res) => {
    res.send('Hola mundo en Node');
});

app.listen(3000);