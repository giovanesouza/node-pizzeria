const carrinhoService = require("../service/carrinho.service");

const createCartController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId
        }
        res.status(201).send(await carrinhoService.createCartService(corpo));
    }catch(err){
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const findCartByIdController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.findCartByIdService(req.params.id));
    }catch(err){
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const findAllCartsController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.findAllCartsService());
    }catch(err){
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};


const updateCartController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.updateCartService(req.params.id, req.body));
    }catch(err){
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const deleteCartController = async (req, res) => {
    try{
        
        const cart = await carrinhoService.deleteCartService(req.params.id);
        
        
        if(cart != null)
            return res.status(200).send(cart);
        
              
        res.status(400).send({message: "Carrinho não existe."});

    }catch(err){
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const addProductCartController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.addProductCartService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const removeProductCartController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.removeProductCartService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

module.exports = {
    createCartController,
    findCartByIdController,
    findAllCartsController,
    updateCartController,
    deleteCartController,
    addProductCartController,
    removeProductCartController
}