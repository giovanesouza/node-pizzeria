const ObjectId = require("mongoose").Types.ObjectId;

// Validações para usuários
const validaUsuario = (req, res, next) => {

    let erros = [];

    if(!req.body.nome){
        erros.push("nome");
    }
    
    if(!req.body.telefone){
        erros.push("telefone");
    }

    if(!req.body.email){
        erros.push("email");
    }

    if(!req.body.senha){
        erros.push("senha");
    }
  

    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }


    return next();
};

const validaLogin = (req, res, next) => {
    let erros = [];
    
    if(!req.body.email){
        erros.push("email");
    }

    if(!req.body.senha){
        erros.push("senha");
    }

    //testando quantos erros temos e tomando decisoes em relacao a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
};

const validaAddEndereco = (req, res, next) => {
    let erros = [];

    if(!req.body.rua) {
        erros.push('rua');
    }

    if(!req.body.numero) {
        erros.push('numero');
    }

    if(!req.body.cep) {
        erros.push('cep');
    }


    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
};

const validaRemoveEndereco = (req, res, next) => {
    let erros = [];

    if(!req.body.userId) {
        erros.push('userId');
    }

    if(!req.body.addressId) {
        erros.push('addressId');
    }


    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
};



// Produto e categoria
const validaCategoria = (req, res, next) => {
    if(!req.body.nome){
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!`});
    }

    return next();
};

const validaProduto = (req, res, next) => {
    let erros = []; 

    if(!req.body.nome){
        erros.push("nome");
    }
    if(!req.body.descricao){
        erros.push("descricao");
    }
    if(!req.body.precoUnit){
        erros.push("precoUnit");
    }


    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }

}




// Validações gerais
const validaIdParams = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID não corresponde aos padrões necessários.`});
    }
};


const validaBodyId = (req, res, next) => {
    if(ObjectId.isValid(req.body._id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID não corresponde aos padroes necessarios`});
    }
};



module.exports = {
    validaUsuario,
    validaLogin,
    validaAddEndereco,
    validaRemoveEndereco,
    validaCategoria,
    validaProduto,
    validaIdParams,
    validaBodyId
}