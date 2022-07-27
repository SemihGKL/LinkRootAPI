const mongoose = require("mongoose");

//création du schéma
const LinkSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 255
    },
    url: {
        type: String,
        required: true,
        max: 255
    },
    isActive: {
        type: Boolean,
        required: false,
        default: true
    }
})

//export du modele
module.exports = mongoose.model('Links', LinkSchema);
