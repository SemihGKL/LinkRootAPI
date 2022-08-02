const { default: mongoose } = require('mongoose');

const router = require('express').Router();

//On importe toutes nos méhodes provenant du controller sous forme de variables
const  { 
    addUser,
    infoUser,
    updateUser,
    loginUser
} = require('../controllers/UserController.js')


//Ajout d'un user à /api/user/addUser
router.post('/addUser',addUser);

//Affichage des infos d'un user
router.get('/:id', infoUser);

router.put('/:id', updateUser);

module.exports = router;
