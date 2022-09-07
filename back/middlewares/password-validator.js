const passwordSchema = require('../models/Password');

// fonction de vérification de la validité des mots passe renseigner en paramètre
module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {  
        let messages = passwordSchema.validate(req.body.password, {details: true }) ;  
        let errorMessage = '';  
        for (const message of messages) {
            errorMessage+= message.message + ' '; 
        }
        res.writeHead(400, errorMessage, {  
            'content-type': 'application/json'
        });
        res.end('Le format du mot de passe est incorrect.');
    } else {
        next(); 
    }
};