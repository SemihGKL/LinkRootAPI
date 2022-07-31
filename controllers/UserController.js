//On devra appeler mongoose pour communiquer avec mongoDB
var mongoose = require('mongoose');

//Importer notre modèle pour s'appuyer dessus lors des différentes actions
var UserModel = require('../models/UserModel');

//On implémente la partie pour hasher le mdp
// var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;


//--------- Ajout d'un user ---------//

//On va définir comme asynchrone la fonction pour attendre la réponse de celle-ci
async function addUser (req, res) {

    //Tous les éléments requis à la création du user
    const {username, email, password} = req.body;

    //Permet d'éxecuter le code et récupérer une éventuelle exception
    try {
        const user = await UserModel.create({username, email, password});
        //On renvois l'id de l'user qu'on vient de créer pour dire que ça a marché
        res.status(201).json({user : user._id})
    } catch(err) {
        //On renvois l'erreur dans la console si il y a
        res.status(200).send({ err })
    }
}
//---------------------------------//


//----------- Modification d'un user -----------//

//Fonction de modification d'un user
function updateUser(req, res) {
    //On va créer un requère et mettre un await pour lors de l'exec() attendre 
    let updatedUser = searchUser(res.param);

    //Puis modifier ses datas
    updatedUser.username = newUsername;
    updatedUser.emai = newEmail;
    updatedUser.password = newPassword;

    //l'await permet d'attendre que tous les traitements précédents soient terminés
    updatedUser.save();
}
//----------------------------------------------//


//----------------------------------------------//

//Fonction de recherche d'un User
function searchUser (UserId) {
    let user = UserModel.findById({_id: UserId}).exec();
    return user;
}
//----------------------------------------------//


//----------------------------------------------//

//Login
function loginUser() {

}

//----------------------------------------------//


//On export toutes nos fonctions en tant que module afin de pouvoir les appeler dans le reste du code
module.exports = {
    addUser,
    updateUser,
    loginUser
}