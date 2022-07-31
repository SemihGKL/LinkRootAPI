const mongoose = require("mongoose");

//Bibliothèques pour l'encryption du mdp
const bcrypt = require('bcrypt');

//création du schéma
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    links: {
        type: [String],
        required: false,
        default: []
    }
})


//Sallage du mdp
//On va lancer ce traitement en async pour qu'on ait le temps de saler le mdp
UserSchema.pre("save", async function(next) {
    //On génère la clé de salage
    const salt = await bcrypt.genSalt();
    //On hash le mdp
    this.password = await bcrypt.hash(this.password, salt);
    //fonction permettant de demander au code de passer à la suite une fois la fin du traitement
    next();
});

//export du modele pour l'utiliser dans toute le code
module.exports = mongoose.model('Users', UserSchema);
