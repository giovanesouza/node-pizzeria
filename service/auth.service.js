// Importações
const User = require('../model/user');
const jwt = require('jsonwebtoken');

// Pega o registro que encontrar com o e-mail digitado
const loginService = (email) => User.findOne({ email });


/*
Utilizado para assinar o token

Parâmetros: id do usuário, String com a chave secreta e Validade do token em segundos

*/
const generateToken = (user, secret) => jwt.sign({ user }, secret, { expiresIn: 30 });


module.exports = { loginService, generateToken };