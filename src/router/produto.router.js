const router = require("express").Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const validaAdmin = require("../middleware/valida.admin.middleware"); // Verifica se é Admin
const { validaProduto, validaIdParams, validaBodyId } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");


router.post("/create", authMiddleware, validaAdmin, validaProduto, produtoController.createProductController);

router.post("/addProductCategory/:id", authMiddleware, validaAdmin, validaIdParams, validaBodyId, produtoController.addProductCategoryController);

router.get("/findById/:id", authMiddleware, validaIdParams, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoController.findAllProductsController);


router.put("/update/:id", authMiddleware, validaAdmin, validaIdParams, validaProduto, produtoController.updateProductController);

router.delete("/delete/:id", authMiddleware, validaAdmin, validaIdParams, produtoController.deleteProductController);
router.delete("/removeProductCategory/:id", authMiddleware, validaAdmin, validaIdParams, validaBodyId, produtoController.removeProductCategoryController);


module.exports = router;