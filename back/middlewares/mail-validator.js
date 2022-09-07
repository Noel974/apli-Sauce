const mailValidator = require('email-validator'); 

// fonction de contrôle de validité des mails renseigner par l'utilisateur
module.exports = (req, res, next) => {
    if (!mailValidator.validate(req.body.email)) {
        res.writeHead(400, "Veuillez entrer un format d'email valide, exemple: piquante@gmail.com", { // envoie la réponse de l'erreur à l'utilisateur
            'content-type': 'application/json'
        });
        res.end("L'adresse email est invalide");    
    } else {
        next();
    }
};