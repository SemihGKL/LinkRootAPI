//Importer notre modèle pour s'appuyer dessus lors des différentes actions
const UserModel = require('../models/UserModel');

//On instancie une instance de mongoose qui permettera de reconnaitre les éléments Id des users
const objectId = require('mongoose').Types.ObjectId;

//--------- Ajout d'un user ---------//

//On va définir comme asynchrone la fonction pour permettre lorsqu'on va await d'attendre la réponse de la Promise (>> manière plus élégante de traiter une Promise)
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
        console.log({err})
    }
}
//---------------------------------//

//--------- Affichage info d'un user ---------//

//On va définir comme asynchrone la fonction pour attendre la réponse de celle-ci
function infoUser (req, res) {

    const userId = req.params.id;

    //Vérification de l'existence de l'ID
    if(!objectId.isValid(userId)) {
        return res.status(400).send("Id inconnu en base")
    }

    // console.log(userId);
    //On va récupérer l'user à travers l'ID
    UserModel.findById(userId, (err, data) => {
        //Si on ne retourne pas d'erreur on affiche la data (sans le pwd > data sensible)
        (!err) ? res.send(data) : console.log(err)
    }).select('-password');
}
//-------------------------------------------//

//----------- Modification d'un user -----------//

//Fonction de modification d'un user
async function updateUser(req, res) {
    const userId = req.params.id;
    if(!objectId.isValid(userId)) {
        return res.status(400).send("Id inconnu en base")
    }


    try{
        const filter = {_id : userId};
        //avec await on va mettre en pause le traitement pour que le try puisse aboutir avant de passer à la suite
        const updatedUser = await UserModel.findOneAndUpdate(
            filter,
            { username : req.body.username },
        )
        return res.status(201).json({ updatedUser : updatedUser.id})
    } catch(err) {
        return res.status(500).json({ message : err})
    }
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
    infoUser,
    updateUser,
    loginUser
}