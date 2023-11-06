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

// Busca usuário pelo email
const findUserByEmail = (user) => User.find({ email: user.email });

// Busca usuário pelo cpf
const findUserByCpf = (user) => User.find({ cpf: user.cpf });

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


// Utilizado para verificar se houve alteração nos dados cadastrais ao atualizar
const checkIfDataIsModified = (user, userFound) => {

    userFound = {
        nome: userFound.nome,
        cpf: userFound.cpf,
        telefone: userFound.telefone,
        dataNasc: userFound.dataNasc,
        email: userFound.email,
        senha: userFound.senha
    }

    // console.log(user)
    // console.log(userFound)

    return JSON.stringify(user) == JSON.stringify(userFound);

}



module.exports = {
    createUser,
    findUserById,
    findUserByEmail,
    findUserByCpf,
    findAllUsers,
    updateUser,
    daleteUser,
    checkIfDataIsModified
}