const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('../server/routes');
const bodyParser = require('body-parser');
const server = express();
server.use(cors());
server.use(bodyParser.json());
server.set('json spaces', 2);
routes(server);

server.listen(3050, () => {
    console.log('server listen on port 3050');
    mongoose.connect('mongodb://localhost/builder', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection
        .once('open', () => {
            console.log('Connexion au serveur mongo ok !');
        })
        .on('error', error => {
            console.warn('Erreur durant la connexion à mongo ', error);
        });
});
