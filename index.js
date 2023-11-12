// Importações
const express = require("express");
require("dotenv").config();


const app = express();

const port = 3000;

app.use(express.json());


app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo(a) a Pizzeria by Giovane Souza."
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})