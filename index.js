// Importações
const express = require("express");
require("dotenv").config();


const connectToDatabase = require('./src/database/database'); // BD


const app = express();

const port = 3000;

app.use(express.json());


connectToDatabase(); // Conexão com o BD


app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo(a) a Pizzeria by Giovane Souza."
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})