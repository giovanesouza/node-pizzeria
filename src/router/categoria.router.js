const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");
const { validaCategoria,  validaIdParams } = require("../middleware/validacao.middleware");


router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoryController);

router.get("/findById/:id", authMiddleware, validaIdParams, categoriaController.findCategoryByIdController);
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriesController);

router.put("/update/:id", authMiddleware, validaIdParams, validaCategoria, categoriaController.updateCategoryController);

router.delete("/delete/:id", authMiddleware, validaIdParams, categoriaController.deleteCategoryController);

module.exports = router;