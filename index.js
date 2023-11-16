// Importações
const express = require("express");
require("dotenv").config();
const cors = require('cors');

const connectToDatabase = require('./src/database/database'); // BD

// Arquivos de rotas
const usuario = require("./src/router/usuario.router");
const auth = require("./src/router/auth.router");
const categoria = require("./src/router/categoria.router");
const produto = require("./src/router/produto.router");
const pedido = require("./src/router/pedido.router");
const carrinho = require("./src/router/carrinho.router");



const app = express();

const port = 3000;

app.use(express.json());


// Habilita o cors e seta uma lista de 'origens'
app.use(cors(
    {
        // Endereços que poderão acessar a API
        origin: [
            "localhost:3001",
            "localhost:3002"
        ],
        // Requisições permitidas
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
));


connectToDatabase(); // Conexão com o BD


// Rotas
app.use("/users", usuario);
app.use("/auth", auth);
app.use("/categories", categoria);
app.use("/products", produto);
app.use("/orders", pedido);
app.use("/carts", carrinho);




app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo(a) a Pizzeria by Giovane Souza."
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});