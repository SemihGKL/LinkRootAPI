const { default: mongoose } = require('mongoose');

const router = require('express').Router();

//On importe toutes nos méhodes provenant du controller sous forme de variables
const  { 
    addUser,
    infoUser,
    updateUser,
    deleteUser,
    loginUser
} = require('../controllers/UserController.js')



//Ajout d'un user à /api/user/addUser
router.put('/', addUser);

//Affichage des infos d'un user
router.get('/:id', infoUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser)

module.exports = router;
