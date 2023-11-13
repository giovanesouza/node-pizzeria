const produtoService = require("../service/produto.service");

const createProductController = async (req, res) => {
    try {
        // return res.status(201).send(await produtoService.createProductService(req.body));
        const produto = await produtoService.createProductService(req.body);

        console.log(produto)

        return res.status(201).send(produto);
    } catch (err) {
        console.log(`erro: ${err.message}`);

        return res.status(500).send({ error: `Tente novamente!` });
    }
};

const findProductByIdController = async (req, res) => {
    try {
        res.send(await produtoService.findProductByIdService(req.params.id));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Tente novamente!` });
    }
};

const findAllProductsController = async (req, res) => {
    try {
        res.send(await produtoService.findAllProductsService());
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Tente novamente!` });
    }
};

const updateProductController = async (req, res) => {
    try {
        res.send(await produtoService.updateProductService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Tente novamente!` });
    }
};


const deleteProductController = async (req, res) => {
    try {
        res.send(await produtoService.deleteProductService(req.params.id));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Tente novamente!` });
    }
};


const addProductCategoryController = async (req, res) => {
    try{
        res.status(200).send(await produtoService.addProductCategoryService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const removeProductCategoryController = async (req, res) => {
    try{
        res.status(200).send(await produtoService.removeProductCategoryService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}



module.exports = {
    createProductController,
    findProductByIdController,
    findAllProductsController,
    updateProductController,
    deleteProductController,
    addProductCategoryController,
    removeProductCategoryController
}