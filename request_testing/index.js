/*

npm init -y   para crear los módulos de Node
npm install express   para instalar express
const app = require ('express')();
const PORT = 8080;

// Para escuchar en el puerto

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)    

// Agrega un endpoint, "ruta" al final (por eso endpoint) del localhost
app.get('/tshirt', (requ, res) => {  //Tenemos acceso a dos objetos
                                    // REQuest: incoming data y RESponse outgoin data(The one we want to send back to the client
    res.status(200).send({
        tshirt:  'River Plate',
        size: 'XS'
    })
});

// con un POST request significa que el usuario está intentando crear nueva información en el servidor( este caso, una nueva remera)
// :id es un dynamic URL parameter que respresenta el ID de la remera.
app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;  //El problema es que express no parsea json por default. Necesitamos un middleware

    if (!logo) {
        res.status(418).send({message: 'We need a logo!'})
    }

    res.send({
        tshirt: `tshirt with your ${logo} and ID of ${id}`,

    })
});
*/

//Ya con el middleware para parsear con express
const express = require ('express');
const app = express();
const PORT = 8080;

app.use(express.json()) // Pasa por el middleware en cada request para parsear y convertir en .json toda la info. Para el POST.
// Para escuchar en el puerto

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)  

// Agrega un endpoint, "ruta" al final (por eso endpoint) del localhost
app.get('/tshirt', (req, res) => {  //Tenemos acceso a dos objetos
                                    // REQuest: incoming data y RESponse outgoin data(The one we want to send back to the client)
    res.status(200).send({
        tshirt:  'River Plate',
        size: 'XS'
    })
});

// con un POST request significa que el usuario está intentando crear nueva información en el servidor( este caso, una nueva remera)
// :id es una dynamic URL parameter que respresenta el ID de la remera.
app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;  //El problema es que express no parsea el body a json por default. Necesitamos un middleware para realizar el parsing.

    if (!logo) {
        res.status(418).send({message: 'We need a logo!'})
    }

    res.send({
        tshirt: `tshirt with your ${logo} and ID of ${id}`,

    })
});
