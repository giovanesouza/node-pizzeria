// Importações
const express = require("express");
require("dotenv").config();


const connectToDatabase = require('./src/database/database'); // BD


const usuario = require("./src/router/usuario.router"); // arquivo de rota do usuarios
const auth = require("./src/router/auth.router"); // arquivo de rota de auth



const app = express();

const port = 3000;

app.use(express.json());


connectToDatabase(); // Conexão com o BD


// Rotas
app.use("/usuarios", usuario); //chamando as rotas do usuario
app.use("/auth", auth); //chamando as rotas de auth




app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo(a) a Pizzeria by Giovane Souza."
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})