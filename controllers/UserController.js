//On devra appeler mongoose pour communiquer avec mongoDB
var mongoose = require('require');

//Importer notre modèle pour s'appuyer dessus lors des différentes actions
var UserModel = require('../models/UserModel');

//On implémente la partie pour hasher le mdp
var bcrypt = require('bcrypt')
SALT_WORK_FACTOR = 10;


//Fonction d'ajout d'un user
function addUser(username, email, password) {
    //On crée une instance de notre modèle pour le remplir
    let hashPassword = password; //va falloir hasher ça

    let user = new UserModel({
        username: username,
        email: email,
        password: hashPassword
    })
    //On enregistre le user
    user.save();

}

//Fonction de modification d'un user
function updateUser(UserId, newUsername, newEmail, newPassword) {
    //On va créer un requère et mettre un await pour lors de l'exec() attendre 
    let updatedUser = searchUser(UserId);

    //Puis modifier ses datas
    updatedUser.username = newUsername;
    updatedUser.emai = newEmail;
    updatedUser.password = newPassword;

    //l'await permet d'attendre que tous les traitements précédents soient terminés
    await updateUser.save();
}

//Fonction de recherche d'un User
function searchUser(UserId) {
    let user = await UserModel.findById({_id: UserId}).exec();
    return user;
}

//Login
function loginUser() {

}