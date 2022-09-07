const jwt = require('jsonwebtoken');
require('dotenv').config();
const Sauce = require('../models/Sauce');

//  compare l'identifiant du créateur de la sauce à l'identifiant de l'utilisateur connecté
module.exports = (req, res, next) => {
  try {
    Sauce.findOne({_id: req.params.id})
    .then(sauce => {
      if (!sauce){
        res.status(404).json({message: 'La sauce n\'existe pas'});
      }else{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        const userId = decodedToken.userId;

        if (sauce.userId && sauce.userId !== userId) {
          res.status(403).json({ message: 'Requête non autorisée' });
        } else {
          next();
        } 
      } 
    })
  } catch (error){
    res.status(500).json({error});
  }
};