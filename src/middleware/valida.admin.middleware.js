const { findUserByIdService } = require("../service/usuario.service");

// Verifica se o usuário é administrador
module.exports = async (req, res, next) => {

    const user = await findUserByIdService(req.userId);

    const isAdmin = user.admin;

    console.log(`É administrador? ${isAdmin}`);

    if (!isAdmin)
        return res.status(401).send({ message: "Apenas administradores podem realizar esta requisição." });

    return next();
}