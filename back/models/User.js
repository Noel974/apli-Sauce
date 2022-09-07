const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator'); 

// configuration du schema de la base de données mongodb
const userSchema = mongoose.Schema({
    email: {type: 'string', required: true, unique: true},
    password: {type: 'string', required: true}
});

//plugin de validation d'une adresse mail unique
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);