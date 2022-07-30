//On devra appeler mongoose pour communiquer avec mongoDB
var mongoose = require('mongoose');

//Importer notre modèle pour s'appuyer dessus lors des différentes actions
var UserModel = require('../models/UserModel');

//On implémente la partie pour hasher le mdp
// var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;


//Fonction d'ajout d'un user
function addUser(req, res) {

    let hashPassword = req.body.password; //va falloir hasher ça

    //On crée une instance de notre modèle pour le remplir
    let user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword
    })
    //On enregistre le user
    user.save();

    if (res.status(201) != "Created") {
        console.log("erreur dans l'ajout du user")
    } else {
        console.log("l'user a été ajouté")
    }
}

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

//Fonction de recherche d'un User
function searchUser (UserId) {
    let user = UserModel.findById({_id: UserId}).exec();
    return user;
}

//Login
function loginUser() {

}

module.exports = {
    addUser,
    updateUser,
    loginUser
}