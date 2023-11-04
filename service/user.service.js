const User = require('../model/user'); // Importa o model

// Funções do CRUD

// Cria usuário
const createUser = (user) => {
    return User.create(user);
}


// Lista um usuário
const findUserById = (id) => {
    return User.findById(id);
}


// Lista todos os usuários
const findAllUsers = () => {
    return User.find();
}

// Atualiza um usuário
const updateUser = (id, user) => {
    return User.findByIdAndUpdate(id, user, { returnDocument: "after" });
}


// Exclui um usuário e o retorna
const daleteUser = (id) => {
    return User.findByIdAndDelete(id, { returnDocument: "after" });
}


module.exports = {
    createUser,
    findUserById,
    findAllUsers,
    updateUser,
    daleteUser
}