const router = require("express").Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaIdParams, validaBodyId } = require("../middleware/validacao.middleware");

router.post("/create", authMiddleware, validaProduto, produtoController.createProductController);

router.post("/addProductCategory/:id", authMiddleware, validaIdParams, validaBodyId, produtoController.addProductCategoryController);

router.get("/findById/:id", authMiddleware, validaIdParams, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, produtoController.findAllProductsController);


router.put("/update/:id", authMiddleware, validaIdParams, validaProduto, produtoController.updateProductController);

router.delete("/delete/:id", authMiddleware, validaIdParams, produtoController.deleteProductController);
router.delete("/removeProductCategory/:id", authMiddleware, validaIdParams, validaBodyId, produtoController.removeProductCategoryController);


module.exports = router;