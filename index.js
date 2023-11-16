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
const carrinho = require("./src/router/carrinho.router");
const pedido = require("./src/router/pedido.router");
const docs = require('./src/router/docs.router'); 


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
app.use("/users", usuario); // Usuários
app.use("/auth", auth); // Autenticação
app.use("/categories", categoria); // Categorias
app.use("/products", produto); // Produtos
app.use("/carts", carrinho); // Carrinhos
app.use("/orders", pedido); // Pedidos
app.use("/docs", docs); // Documentação (swagger)




app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo(a) a Pizzeria by Giovane Souza."
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});