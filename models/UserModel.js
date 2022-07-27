const mongoose = require("mongoose");

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

//export du modele
module.exports = mongoose.model('Users', UserSchema);
