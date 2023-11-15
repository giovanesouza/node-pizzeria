const ObjectId = require("mongoose").Types.ObjectId;

// Validações para usuários
const validaUsuario = (req, res, next) => {

    let erros = [];

    if (!req.body.nome) {
        erros.push("nome");
    }

    if (!req.body.telefone) {
        erros.push("telefone");
    }

    if (!req.body.email) {
        erros.push("email");
    }

    if (!req.body.senha) {
        erros.push("senha");
    }


    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }


    return next();
};

const validaLogin = (req, res, next) => {
    let erros = [];

    if (!req.body.email) {
        erros.push("email");
    }

    if (!req.body.senha) {
        erros.push("senha");
    }

    //testando quantos erros temos e tomando decisoes em relacao a isso
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
};

const validaAddEndereco = (req, res, next) => {
    let erros = [];

    if (!req.body.rua) {
        erros.push('rua');
    }

    if (!req.body.numero) {
        erros.push('numero');
    }

    if (!req.body.cep) {
        erros.push('cep');
    }


    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
};

const validaRemoveEndereco = (req, res, next) => {
    let erros = [];

    if (!req.body.userId) {
        erros.push('userId');
    }

    if (!req.body.addressId) {
        erros.push('addressId');
    }


    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
};



// Produto e categoria
const validaCategoria = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!` });
    }

    return next();
};

const validaProduto = (req, res, next) => {
    let erros = [];

    if (!req.body.nome) {
        erros.push("nome");
    }
    if (!req.body.descricao) {
        erros.push("descricao");
    }
    if (!req.body.precoUnit) {
        erros.push("precoUnit");
    }
    if (!req.body.categorias) {
        erros.push("categorias");
    }


    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }

}


// Pedido e carrinho
const validaPedido = (req, res, next) => {

    let erros = [];

    if (!req.body.carrinhoId) {
        erros.push('carrinhoId');
    }

    if (!req.body.formaPagamento) {
        erros.push('formaPagamento');
    }

    
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }


};

const validaCarrinho = (req, res, next) => {
    let erros = []; //var para acumular os erros

    if (!req.body.precoTotal) {
        erros.push("precoTotal");
    }

    if (!req.body.frete) {
        erros.push("frete");
    }

    //testando quantos erros temos e tomando decisoes em relacao a isso
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
};

const validaProdutosCarrinhoPedido = (req, res, next) => {
    let erros = [];

    req.body.produtos.map((value, key) => {
        if (!value._id) {
            erros.push(`'${key + 1} - _id'`)
        }
        if (!ObjectId.isValid(value._id)) {
            erros.push(`'${key + 1} - tipo inválido'`)
        }
        if (!value.quantidade) {
            erros.push(`'${key + 1} - quantidade'`)
        }
    });

    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
};



// Validações gerais
const validaIdParams = (req, res, next) => {
    if (ObjectId.isValid(req.params.id)) {
        return next();
    } else {
        return res.status(400).send({ message: `O 'id' do parâmetro não corresponde aos padrões necessários.` });
    }
};


const validaBodyId = (req, res, next) => {

    const body = req.body;
    const verify = body._id || body.carrinhoId || body.userId || body.addressId;

    if (ObjectId.isValid(verify)) {
        return next();
    } else {
        return res.status(400).send({ error: `O 'id' do body não corresponde aos padrões necessários.` });
    }
};



module.exports = {
    validaUsuario,
    validaLogin,
    validaAddEndereco,
    validaRemoveEndereco,
    validaCategoria,
    validaProduto,
    validaPedido,
    validaCarrinho,
    validaProdutosCarrinhoPedido,
    validaIdParams,
    validaBodyId
}