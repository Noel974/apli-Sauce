const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 

// fonction d'authentication
module.exports = (req, res, next) => {  
  try {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY); 
    const userId = decodedToken.userId; 
    if (req.body.userId && req.body.userId !== userId) {
      res.status(403).json({ message: 'Requête non autorisée' });  
    } else {
      next(); 
    }
  } catch (error) {
    res.status(500).json({error});
  }
};