const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const carrinhoController = require("../controller/carrinho.controller");
const { validaCarrinho,  validaIdParams, validaBodyId, validaProdutosCarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");


router.post("/create", authMiddleware, validaProdutosCarrinhoPedido, validaCarrinho, carrinhoController.createCartController);
router.post("/addProductCart/:id", authMiddleware, validaIdParams, validaBodyId, carrinhoController.addProductCartController);

router.get("/findById/:id", authMiddleware, validaIdParams, carrinhoController.findCartByIdController);
router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCartsController);


router.put("/update/:id", authMiddleware, validaIdParams, validaProdutosCarrinhoPedido, validaCarrinho, carrinhoController.updateCartController);

router.delete("/delete/:id", authMiddleware, validaIdParams, carrinhoController.deleteCartController);
router.delete("/removeProductCart/:id", authMiddleware, validaIdParams, validaBodyId, carrinhoController.removeProductCartController);


module.exports = router;