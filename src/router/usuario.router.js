const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.middleware"); // Validação de login
const { validaUsuario, validaIdParams } = require("../middleware/validacao.middleware");



// Rotas POST
router.post('/create', validaUsuario, usuarioController.createUserController);
router.post('/addAddress/:id', authMiddleware, usuarioController.addUserAddressController);
router.post('/addFavProduto/:id', authMiddleware, validaIdParams, usuarioController.addFavProdutoController);

// Rotas GET
router.get('/findById/:id', authMiddleware, validaIdParams, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, usuarioController.findAllUsersController);


// Rotas PUT
router.put('/update/:id', authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

// Rotas DELETE
router.delete('/delete/:id', authMiddleware, validaIdParams, usuarioController.deleteUserController);
router.delete('/removeAddress', authMiddleware, usuarioController.removeUserAddressController);
router.delete('/removeFavProduto/:id', authMiddleware, validaIdParams, usuarioController.removeFavProdutoController);

module.exports = router;