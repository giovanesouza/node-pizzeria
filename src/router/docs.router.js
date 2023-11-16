// Importações
const router = require("express").Router();

const swaggetUi = require("swagger-ui-express"); // Interface do swagger
const swaggerDocument = require("../../swagger.json"); // Documentação swagger.json (está na raíz do projeto)

// Rotas
router.use("/api-docs", swaggetUi.serve); // Onde a documentação vai funcionar
router.get("/api-docs", swaggetUi.setup(swaggerDocument)); // Ao chamar a rota, pega as configurações do documento (swagger.json)

module.exports = router;