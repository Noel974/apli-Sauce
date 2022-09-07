const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');
const idCompare = require('../middlewares/id-compare');
const limited =require('../middlewares/limite-req');
const sauceValidator = require('../middlewares/sauce-validator.js');
const saucesCtrl = require('../controllers/sauces');

router.get('/', auth,  multer, saucesCtrl.getAllSauces); // route pour afficher toute les sauces

router.get('/:id', auth, saucesCtrl.getOneSauce); // route pour afficher une sauce en fonction de son identifiant

router.post('/', auth, limited ,  multer, sauceValidator, saucesCtrl.createSauce); // route pour créer une sauce

router.put('/:id', auth, limited, idCompare, sauceValidator,  multer, saucesCtrl.modifySauce);   // route pour modifier une sauce

router.delete('/:id', auth, idCompare , saucesCtrl.deleteSauce); // route pour supprimer une sauce

router.post('/:id/like', auth, limited, saucesCtrl.likeSauce); // route pour les likes des sauces

module.exports = router; // export des routes