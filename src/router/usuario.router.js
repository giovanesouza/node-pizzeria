const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.middleware"); // Validação de login
const { validaUsuario, validaIdParams, validaBodyId, validaAddEndereco, validaRemoveEndereco } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");


// Rotas POST
router.post('/create', validaUsuario, usuarioController.createUserController);
router.post('/addAddress/:id', authMiddleware, validaIdParams, validaAddEndereco, usuarioController.addUserAddressController);
router.post('/addFavProduto/:id', authMiddleware, validaIdParams, validaBodyId, usuarioController.addFavProdutoController);

// Rotas GET
router.get('/findById/:id', authMiddleware, validaIdParams, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, paginacao, usuarioController.findAllUsersController);
router.get('/findAllAddress/:id', authMiddleware, validaIdParams, usuarioController.findAllAddressController);


// Rotas PUT
router.put('/update/:id', authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

// Rotas DELETE
router.delete('/delete/:id', authMiddleware, validaIdParams, usuarioController.deleteUserController);
router.delete('/removeAddress', authMiddleware, validaRemoveEndereco, usuarioController.removeUserAddressController);
router.delete('/removeFavProduto/:id', authMiddleware, validaIdParams, validaBodyId, usuarioController.removeFavProdutoController);

module.exports = router;