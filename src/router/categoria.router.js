const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");
const { validaCategoria,  validaIdParams } = require("../middleware/validacao.middleware");
const validaAdmin = require("../middleware/valida.admin.middleware"); // Verifica se é Admin
const paginacao = require("../middleware/paginacao.middleware");

router.post("/create", authMiddleware, validaAdmin, validaCategoria, categoriaController.createCategoryController);

router.get("/findById/:id", authMiddleware, validaIdParams, categoriaController.findCategoryByIdController);
router.get("/findAll", authMiddleware, paginacao, categoriaController.findAllCategoriesController);

router.put("/update/:id", authMiddleware, validaAdmin, validaIdParams, validaCategoria, categoriaController.updateCategoryController);

router.delete("/delete/:id", authMiddleware, validaAdmin, validaIdParams, categoriaController.deleteCategoryController);

module.exports = router;