// Requisita o Express e permite utilizá-lo no código
const express = require('express');

const app = express();

// Importação das rotas de usuários
const users = require("./router/users.router"); 


/* == CONFIGURAÇÕES == */ 

// port=> Porta onde a aplicação vai rodar
const port = 3000;


/* Permite trabalhar com JSON */ 
app.use(express.json());

// Cria uma rota que aceita subrotas
app.use("/users", users);




app.get("/", (req, res) => {

    res.send("Hello World! Welcome to my API about users."); // Envia resposta quando requisitarem a rota

});




app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});