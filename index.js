// Importações
const express = require('express');
const users = require("./router/users.router"); 
const connectToDataBase = require('./database/database');
const authService = require('./service/auth.service');
const jwt = require('jsonwebtoken');

const app = express();

connectToDataBase(); // Conecta com o BD


const port = 3000;

const secret = "654713cfd826fac00e88c4e5"; // Utilizado para gerar o token


app.use(express.json());


// Cria uma rota que aceita subrotas
app.use("/users", users);




app.get("/", (req, res) => {

    res.send("Hello World! Welcome to my API about users."); // Envia resposta quando requisitarem a rota

});



app.post("/login", async (req, res) => {

    try {

        // Recuperação do email e senha por meio de - desconstrução de objeto - { email, senha }
        const { email, senha } = req.body; // req.body é um objeto

        const user = await authService.loginService(email); // Verifica se o email passado existe

        // Caso não exista...
        if (!user) {
            return res.status(400).send({ message: "Usuário não encontrado. Tente novamente." });
        }


        // Verifica se a senha passada no corpo da requisição é diferente da senha do usuário requisitado
        if (senha != user.senha) {
            return res.status(400).send({ message: "Senha inválida!" });
        }


        const token = authService.generateToken(user, secret);

        // Passou pelas validações e o usuário confere (email e senha)
        res.status(200).send({ user, token });

    } catch (err) {

        console.log(`Erro: ${err}`);

    }

});


// Reconhece e permite fazer o login APENAS informando um token válido
app.get("/validar-token", (req, res) => {

    const authHeader = req.headers.authorization;

    // Caso não exista... msg de erro
    if (!authHeader) {
        return res.status(401).send({ message: "O token não foi informado." });
    }

    // Caso exista, divide o objeto do token em partes {token: chaveToken} -> duas partes
    const parts = authHeader.split(" ");


    // Caso seja dividido em mais ou menos do que 2 partes...
    if (parts.length !== 2) {
        return res.status(401).send({ message: "Token inválido!" });
    }


    const [scheme, token] = parts;


    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ message: "Token mal formatado." })
    }

    // Verificação do jwt -> Verifica as informações contidas no TOKEN
    // Necessário passar o token e o segredo criado acima
    jwt.verify(token, secret, (err, decoded) => {

        // Tudo Ok, vira decoded, senão, err.
        if(err) {

            // Pega o tipo do erro e lança uma msg com base nele
            if (err.name === "TokenExpiredError") {
                
                console.log(`Erro: ${err}`);
                return res.status(401).send({ message: "O token expirou. Faça o login novamente." });

            } else {

                console.log(`Erro: ${err}`);
                return res.status(500).send({ message: "Erro interno, tente novamente." });
            }

        }

        console.log(decoded);

        res.send(decoded);
    });

});





app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});