// Requisita o Express e permite utilizá-lo no código
const express = require('express');

const app = express();




/* == CONFIGURAÇÕES == */ 

// port=> Porta onde a aplicação vai rodar
const port = 3000;


/* Permite trabalhar com JSON */ 
app.use(express.json());





app.get("/", (req, res) => {

    res.send("Hello World! Welcome to my API about users."); // Envia resposta quando requisitarem a rota

});




app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});