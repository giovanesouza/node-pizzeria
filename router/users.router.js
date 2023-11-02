const router = require("express").Router();

// Importa o arquivo de controle de usuários
const users = require('../controller/users.controller');


// Rotas - ("rota", função a ser executada ao chamá-la -> controller)

router.post("/create", users.create); // Cria um usuário
router.get("/find/:id", users.find); // Retorna 1 usuário
router.get("/findAll", users.findAll); // Retorna todos os usuários
router.put("/update/:id", users.update); // Atualiza usuário
router.delete("/delete/:id", users.dalete); // Exclui usuário



// Exporta o router com todas as rotas criadas
module.exports = router;