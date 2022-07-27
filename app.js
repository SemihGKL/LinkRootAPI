const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

const apiRoute = "/api"
const userRoute = require('./routes/UserRoute');

//permet de charger tout ce qu'il y a dans le .env et le charger dans process.env
dotenv.config();

app.use(cors());

//Permet de parser le JSON
app.use(express.json())

app.use(apiRoute + '/user', userRoute)

//Connexion à la base de données MongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    () => {
        console.log("connected to DB");
    }
);

app.listen(5600, () => console.log('Server started'));