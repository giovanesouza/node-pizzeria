const router = require("express").Router();

const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const validaAdmin = require("../middleware/valida.admin.middleware"); // Verifica se é Admin
const { validaPedido,  validaIdParams, validaBodyId } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.post("/create", authMiddleware, validaPedido, pedidoController.createOrderController);

router.get("/findById/:id", authMiddleware, validaIdParams, pedidoController.findOrderByIdController);

router.get("/findAll", authMiddleware, paginacao, pedidoController.findAllOrdersController);
router.get("/findAllOrdersByUserId/:id", authMiddleware, validaIdParams, paginacao, pedidoController.findAllOrdersByUserIdController);
router.get("/getOrderInfoById/:id", authMiddleware, validaIdParams, pedidoController.getOrderInfoByIdController);
router.get("/getAllOpenOrders", authMiddleware, validaAdmin, paginacao, pedidoController.getAllOpenOrdersController);

router.delete("/delete/:id", authMiddleware, validaIdParams, pedidoController.deleteOrderController);

router.patch("/updateStatus/:id", authMiddleware, validaAdmin, validaIdParams, pedidoController.updateOrderStatusController);


module.exports = router;