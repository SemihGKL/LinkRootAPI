const { default: mongoose } = require('mongoose');

const router = require('express').Router();

//On importe toutes nos méhodes provenant du controller sous forme de variables
const  { 
    addUser,
    updatedUser,
    loginUser
} = require('../controllers/UserController.js')


//route put asynchrone car pas immédiat (connexion db etc)
router.put('/', async (req, res) => {
    
})

router.post('/addUser',addUser)

module.exports = router;
