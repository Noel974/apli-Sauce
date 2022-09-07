
const bcrypt = require('bcrypt');  //import du module bcrypt
const User = require('../models/User');  //import du schema du models user
const jwt = require('jsonwebtoken');    //import du module  jsonwebtoken
require('dotenv').config(); // variable d'environnement

// Fonction de création d'un utilisateur 
exports.signup = (req, res, next) => {
    // cryptage du mot de passe
    bcrypt.hash(req.body.password, 10) 
    .then(hash => {
        const user = new User({ 
            email: req.body.email, 
            password: hash  
        });
        user.save() 
            .then(() => res.status(201).json({message: 'Utilisateur créé !'})) 
            .catch(error => res.status(400).json({message : error + " L'adresse mail a été utilisée"} )); 
    })
    .catch(error => res.status(500).json({message:'error serveur'})) 
};

// Fonction d'authentication d'un utilisateur
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }) 
        .then(user => {
            if (!user) {    
                return res.status(401).json({ error: 'Utilisateur non trouvé !' }); 
            }
            bcrypt.compare(req.body.password, user.password)  
                .then(valid => {    
                    if (!valid) { 
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(    
                            { userId: user._id },   
                            process.env.TOKEN_KEY,  
                            { expiresIn: '24h' }    
                        )
                    });
                })
                .catch(error => res.status(500).json({message : error }))      
        })
    .catch(error => res.status(500).json({error}))  
};