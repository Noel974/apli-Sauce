const express = require('express');

const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
const userRoutes = require('./routes/User');
const userSauces = require('./routes/sauces');


const path = require('path');

require('dotenv').config();

// connexion a la base de données mongoDBy
mongoose.connect(process.env.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))

// Permet d'analyser le corps de la requête.
app.use(express.json());

// configuration des CORS doit être placé avant les routes de l'API
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH', 'OPTIONS');
    next();
})

//Sécurise les headers
app.use(helmet({ crossOriginResourcePolicy: { policy: "same-site" } }));

app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
//middleware qui charge les ficihiers qui sont dans le répertoire images
app.use('/images', express.static(path.join(__dirname, 'images')))

// configuration des routes
app.use('/api/sauces', userSauces);
app.use('/api/auth', userRoutes);

module.exports = app; 